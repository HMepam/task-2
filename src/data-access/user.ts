import { Op } from 'sequelize';
import { User } from '../models';
import { UserInput, UserOutput } from '../models/user/types';
import { WhereOptions } from 'sequelize/types/model';

class UserDAl {
  async getById(id: number): Promise<Promise<UserOutput> | null> {
    const user = await User.findByPk(id);

    return user;
  }

  async getByOptions(
    options: WhereOptions<any>
  ): Promise<Promise<UserOutput> | null> {
    const user = await User.findOne({ where: options });
    return user;
  }

  async getLimitedByOptions(
    limit: number,
    options: WhereOptions<any>
  ): Promise<Promise<UserOutput[]> | null> {
    const users = await User.findAll({ limit, where: options });
    return users;
  }

  async update(id: number, payload: Partial<UserInput>): Promise<UserOutput> {
    const user = await User.findByPk(id);

    if (!user) {
      // @todo throw custom error
      throw new Error('not found');
    }

    const updatedUser = await user.update(payload);
    return updatedUser;
  }

  async create(payload: UserInput): Promise<UserOutput> {
    const user = await User.create(payload);
    return user;
  }

  async deleteById(id: number): Promise<boolean> {
    const deletedUserCount = await User.destroy({
      where: { id }
    });

    return !!deletedUserCount;
  }
}

export default new UserDAl();
