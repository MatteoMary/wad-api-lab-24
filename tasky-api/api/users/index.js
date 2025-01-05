import express from 'express';
import User from './userModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

// Register (Create)/Authenticate User
router.post('/', asyncHandler(async (req, res) => {
    if (req.query.action === 'register') {
        try {
            // Save new user
            const user = await User(req.body).save();
            res.status(201).json({
                code: 201,
                msg: 'Successfully created new user.',
                user,
            });
        } catch (error) {
            if (error.name === 'ValidationError') {
                // Handle Mongoose validation errors
                const errors = Object.values(error.errors).map((e) => e.message);
                res.status(400).json({ error: errors });
            } else {
                res.status(500).json({ error: 'An unexpected error occurred.' });
            }
        }
    } else {
        // Authenticate user
        const user = await User.findOne(req.body);
        if (!user) {
            return res.status(401).json({ code: 401, msg: 'Authentication failed' });
        } else {
            return res.status(200).json({ code: 200, msg: 'Authentication Successful', token: 'TEMPORARY_TOKEN' });
        }
    }
}));

// Update a user
router.put('/:id', asyncHandler(async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await User.updateOne({ _id: req.params.id }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code: 200, msg: 'User Updated Successfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update User' });
    }
}));

export default router;
