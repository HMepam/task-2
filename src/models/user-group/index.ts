import { DataTypes, Model } from 'sequelize';
import { sequelizeConnection } from '../../db';
import Group from '../group';
import User from '../user';
import { UserGroupType } from './types';

class UserGroup extends Model<UserGroupType> implements UserGroupType {
  public userId!: number;
  public groupId!: string;
}

UserGroup.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    groupId: {
      type: DataTypes.UUID,
      references: {
        model: Group,
        key: 'id'
      }
    }
  },
  {
    sequelize: sequelizeConnection
  }
);

export default UserGroup;
