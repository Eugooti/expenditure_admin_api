const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
require("dotenv").config();

const login = async (Users, req, res) => {
    try {
        const { emailAddress, password } = req.body;

        // Find the user by email address (case-insensitive)
        const user = await Users.findOne({
            where: { emailAddress: { [Op.like]: emailAddress } },
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                result: null,
                message: 'Invalid credentials',
            });
        }

        // Check if the provided password matches the stored hashed password
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                result: null,
                message: 'Invalid credentials',
            });
        }

        // Generate a JWT token with only essential user information
        const token = jwt.sign(
            { userId: user.id },
            process.env.REFRESH_TOKEN,
            { expiresIn: '1h' }
        );

        return res.status(200).json({
            success: true,
            result: { userId: user.id, token },
            message: 'Login successful',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            result: null,
            message: 'Error during login',
            error: error.message,
        });
    }
};

module.exports = login;
