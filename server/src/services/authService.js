const User = require('../models/User');

const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/constants');

exports.register = async (userData) => {
    const existing = await User.findOne({ email: new RegExp(`^${userData.email}$`, 'i') });

    if (existing) {
        throw new Error('Email is already taken');
    };

    const createdUser = User.create(userData);

    return createSession(createdUser);
};

function createSession(user) {
    const payload = {
        email: user.email,
        _id: user._id
    };

    const accessToken = jwt.sign(payload, SECRET);

    return {
        email: user.email,
        accessToken,
        _id: user._id
    };
}
