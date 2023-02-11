import { User, Group, UserGroup } from '../models';
const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
  User.sync({ alter: isDev });
  Group.sync({ alter: isDev });
  UserGroup.sync({ alter: isDev });

  User.belongsToMany(Group, { through: 'UserGroup' });
  Group.belongsToMany(User, { through: 'UserGroup' });
};
export default dbInit;
