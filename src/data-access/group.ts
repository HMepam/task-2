import { Group } from '../models';
import { GroupInput, GroupOutput } from '../models/group/types';

class GroupDAL {
  async getById(id: string): Promise<Promise<GroupOutput> | null> {
    return await Group.findByPk(id);
  }

  async getAll(): Promise<Array<GroupOutput>> {
    return await Group.findAll();
  }

  async create(payload: GroupInput): Promise<GroupOutput> {
    return await Group.create(payload);
  }

  async update(id: number, payload: Partial<GroupInput>): Promise<GroupOutput> {
    const group = await Group.findByPk(id);

    if (!group) {
      // @todo throw custom error
      throw new Error('not found');
    }

    return await group.update(payload);
  }

  async hardDeleteById(id: string): Promise<boolean> {
    const deletedGroupCount = await Group.destroy({
      where: { id }
    });

    return !!deletedGroupCount;
  }
}

export default new GroupDAL();
