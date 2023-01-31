import { Op } from 'sequelize';
import { Request } from 'express';
import userDAL from '../data-access/user';
import { UserInput } from '../models/user/types';

class UserService {
  async login(login: string, password: string) {
    /*
     * In real need to check login
     * and compare hashed password and set token
     * in the cookies or in the header
     * for now just for example
     * */
    return await userDAL.getByOptions({ login, password });
  }

  async getAutoSuggestUsers(login: string, limit: number) {
    const options = {
      login: {
        [Op.like]: `%${login.substring(1, 3)}%`
      }
    };
    return await userDAL.getLimitedByOptions(limit, options);
  }

  async getUser(id: string) {
    return await userDAL.getById(+id);
  }

  async createUser(data: Request['body']) {
    const existUser = await userDAL.getByOptions({ login: data.login });

    if (existUser) {
      throw new Error('User already exist');
    }
    /*
     * In real need to encrypt password and save hash
     * for now just for example I am saving password
     * */

    return await userDAL.create(data);
  }

  async updateUser(data: Request['body']) {
    return await userDAL.update(data.id, data as Partial<UserInput>);
  }

  async softDeleteUser(id: string) {
    await userDAL.update(+id, { isDeleted: true });
  }
}

export const userService = new UserService();
