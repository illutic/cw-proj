import User from '../models/User.js';
import Photo from '../models/Photo.js';
import Skill from '../models/Skill.js';
import checkPassword from '../utils/checkPassword.js';

export const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            throw Error('No user ID provided.');
        }
        const user = await User.findOne({
            where: { id: req.params.id },
            include: [Photo, Skill],
            attributes: {
                exclude: ['email', 'password'],
            },
        });
        if (!user) {
            throw Error('Incorrect user ID.');
        }
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const patchEmail = async (req, res) => {
    try {
        const { userId, email, password } = req.body;
        const emailRegExp = new RegExp(
            /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
        );
        if (!userId) {
            throw Error('No user ID provided.');
        }
        if (!email || !emailRegExp.test(email)) {
            throw Error('Please enter a valid email address.');
        }
        if (userId !== req.userId) {
            throw Error('Unauthorised.');
        }
        await checkPassword(userId, password);
        await User.update(
            {
                email,
            },
            {
                where: {
                    id: userId,
                },
            }
        );
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteAccount = async (req, res) => {
    const { userId, password } = req.body;
    try {
        if (!userId) {
            throw Error('No user ID provided.');
        }
        if (userId !== req.userId) {
            throw Error('Unauthorised.');
        }
        await checkPassword(userId, password);
        await User.destroy({ where: { id: userId } });
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
