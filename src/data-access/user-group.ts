import { UserGroup } from '../models';
import { UserGroupType } from '../models/user-group/types';
import { sequelizeConnection } from '../db';

class UserGroupDAL {
  async createMany(payload: UserGroupType[]): Promise<UserGroup[] | undefined> {
    const t = await sequelizeConnection.transaction();

    try {
      const users = await Promise.all(
        payload.map(data => UserGroup.create(data, { transaction: t }))
      );
      await t.commit();
      return users;
    } catch (error) {
      await t.rollback();
    }
  }

  async deleteByGroupId(groupId: string): Promise<boolean> {
    const deletedUserGroupCount = await UserGroup.destroy({
      where: { groupId }
    });

    return !!deletedUserGroupCount;
  }
}

export default new UserGroupDAL();
