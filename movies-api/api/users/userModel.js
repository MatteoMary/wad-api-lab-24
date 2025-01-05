import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value);
            },
            message: 'Password must be at least 8 characters long, include a letter, a digit, and a special character.'
        }
    }
});

const User = mongoose.model('User', userSchema);
export default User;
