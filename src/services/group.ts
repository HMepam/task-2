import { Request } from 'express';
import groupDAL from '../data-access/group';
import userGroupDAL from '../data-access/user-group';
import { GroupInput } from '../models/group/types';

class GroupService {
  async getAllGroup() {
    return await groupDAL.getAll();
  }

  async getGroup(id: string) {
    return await groupDAL.getById(id);
  }

  async createGroup(data: Request['body']) {
    return await groupDAL.create({
      name: data.name,
      permissions: data.permissions
    });
  }

  async updateGroup(data: Request['body']) {
    return await groupDAL.update(data.id, data as Partial<GroupInput>);
  }

  async addUsersToGroup(data: Request['body']) {
    return await userGroupDAL.create({
      groupId: data.groupId,
      userId: data.userId
    });
  }

  async deleteGroup(id: string) {
    await Promise.all([
      groupDAL.hardDeleteById(id),
      userGroupDAL.deleteByGroupId(id)
    ]);
    return;
  }
}

export const groupService = new GroupService();
