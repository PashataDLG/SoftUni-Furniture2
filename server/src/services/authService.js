const User = require('../models/User');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { SECRET } = require('../config/constants');

exports.register = async (userData) => {
    const existing = await User.findOne({ email: new RegExp(`^${userData.email}$`, 'i') });

    if (existing) {
        throw new Error('Email is already taken');
    };

    const createdUser = User.create(userData);

    return createSession(createdUser);
};

exports.login = async (userData) => {
    const user = await User.findOne({ email: userData.email });

    if (!user) {
        throw {
            message: 'Email or Password is incorrect!'
        };
    };

    const isValid = await bcrypt.compare(userData.password, user.password);

    if(!isValid) {
        throw {
            message: 'Email or Password is incorrect!'
        };
    };

    return createSession(user);
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
