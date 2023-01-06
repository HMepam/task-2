import mongoose from 'mongoose';
import { Request } from 'express';
import { IUser } from '../schemas/user/type';

const User = mongoose.model('User');

class UserService {
  login(login: IUser['login'], password: IUser['password']) {
    /*
     * In real need to check login
     * and compare hashed password and set token
     * in the cookies or in the header
     * for now just for example
     * */
    return User.findOne({ login, password });
  }

  getAutoSuggestUsers(login: IUser['login'], limit: number) {
    const regex = new RegExp(login.substring(1, 3), 'i');
    return User.find({ login: { $regex: regex } }).limit(limit);
  }

  getUser(id: string) {
    /*
     * In real need to check token
     * for now just for example
     * */
    return User.findById(id);
  }

  async createUser(data: Request['body']) {
    const existUser = await User.findOne({ login: data.login });

    if (existUser) {
      throw new Error('User already exist');
    }
    /*
     * In real need to encrypt password and save hash
     * for now just for example I am saving password
     * */

    const newUser = new User(data);
    await new newUser.save();
    return newUser;
  }

  async updateUser(data: Request['body']) {
    const user = await User.findById(data.id);
    user.login = data.login;
    user.password = data.password;
    user.age = data.age;
    await user.save();
    return user;
  }

  async softDeleteUser(id: string) {
    await User.updateOne({ _id: id }, { isDeleted: true });
  }
}

export const userService = new UserService();
