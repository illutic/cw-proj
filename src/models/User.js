import { Sequelize } from 'sequelize';
import database from '../data-access/database.js';

const User = database.define(
    'User',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'This e-mail address is already in use.',
            },
        },
        password: {
            type: Sequelize.STRING(64),
            allowNull: true,
            // ^ Set to true for Google users
        },
        title: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        profilePhoto: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        backgroundImage: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    },
    { timestamps: false }
);

export default User;
