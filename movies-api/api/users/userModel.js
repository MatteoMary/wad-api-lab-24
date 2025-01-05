import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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

// Add methods to the schema
userSchema.methods.comparePassword = async function (passw) { 
    return await bcrypt.compare(passw, this.password); 
};

// Add a static method
userSchema.statics.findByUserName = function (username) {
    return this.findOne({ userName: username });
};

// Pre-save hook for hashing the password
userSchema.pre('save', async function(next) {
    const saltRounds = 10; // Number of salt rounds
    if (this.isModified('password') || this.isNew) {
        try {
            const hash = await bcrypt.hash(this.password, saltRounds);
            this.password = hash;
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

const User = mongoose.model('User', userSchema);
export default User;
