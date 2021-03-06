import { Sequelize} from 'sequelize';
import database from '../database/database.js';
import User from './User.js';

const skill = database.define(
    'skill',
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        skillname: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }
)
skill.belongsToMany(User);
export default skill;