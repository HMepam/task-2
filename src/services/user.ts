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
    const user = await userDAL.getByOptions({ login, password });
    return user;
  }

  async getAutoSuggestUsers(login: string, limit: number) {
    const options = {
      login: {
        [Op.like]: `%${login.substring(1, 3)}%`
      }
    };
    const user = await userDAL.getLimitedByOptions(limit, options);
    return user;
  }

  async getUser(id: string) {
    const user = await userDAL.getById(+id);
    return user;
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

    const newUser = await userDAL.create(data);
    return newUser;
  }

  async updateUser(data: Request['body']) {
    const user = await userDAL.update(data.id, data as Partial<UserInput>);
    return user;
  }

  async softDeleteUser(id: string) {
    await userDAL.update(+id, { isDeleted: true });
  }
}

export const userService = new UserService();
