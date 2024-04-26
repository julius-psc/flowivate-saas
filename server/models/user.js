


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// User properties
const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true }, // For Google login (if using)
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
});

// Hash password before saving the user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.hash(this.password, salt);
})

module.exports = mongoose.model('User', userSchema);
