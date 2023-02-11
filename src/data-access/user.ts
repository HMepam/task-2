import { WhereOptions } from 'sequelize/types/model';
import { UserInput, UserOutput } from '../models/user/types';
import { User } from '../models';

class UserDAL {
  async getById(id: number): Promise<Promise<UserOutput> | null> {
    return await User.findByPk(id);
  }

  async getByOptions(
    options: WhereOptions<any>
  ): Promise<Promise<UserOutput> | null> {
    return await User.findOne({ where: options });
  }

  async getLimitedByOptions(
    limit: number,
    options: WhereOptions<any>
  ): Promise<Promise<UserOutput[]> | null> {
    return await User.findAll({ limit, where: options });
  }

  async update(id: number, payload: Partial<UserInput>): Promise<UserOutput> {
    const user = await User.findByPk(id);

    if (!user) {
      // @todo throw custom error
      throw new Error('not found');
    }

    return await user.update(payload);
  }

  async create(payload: UserInput): Promise<UserOutput> {
    return await User.create(payload);
  }

  async deleteById(id: number): Promise<boolean> {
    const deletedUserCount = await User.destroy({
      where: { id }
    });

    return !!deletedUserCount;
  }
}

export default new UserDAL();
