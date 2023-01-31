import { UserGroup } from '../models';
import { UserGroupType } from '../models/user-group/types';

class UserGroupDAL {
  async create(payload: UserGroupType): Promise<UserGroupType> {
    return await UserGroup.create(payload);
  }

  async deleteByGroupId(groupId: string): Promise<boolean> {
    const deletedUserGroupCount = await UserGroup.destroy({
      where: { groupId }
    });

    return !!deletedUserGroupCount;
  }
}

export default new UserGroupDAL();
