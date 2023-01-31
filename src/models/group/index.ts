import { DataTypes, Model } from 'sequelize';
import { sequelizeConnection } from '../../db';
import { GroupInput, GroupType, PermissionEnum, PermissionType } from './types';

class Group extends Model<GroupType, GroupInput> implements GroupType {
  public id!: string;
  public name!: string;
  public permissions!: Array<PermissionType>;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Group.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    permissions: {
      type: DataTypes.ARRAY(
        DataTypes.ENUM({
          values: [
            PermissionEnum.READ,
            PermissionEnum.WRITE,
            PermissionEnum.SHARE,
            PermissionEnum.DELETE,
            PermissionEnum.UPLOAD_FILES
          ]
        })
      ),
      allowNull: false
    }
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection
  }
);

export default Group;
