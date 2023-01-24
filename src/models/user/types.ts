import { Optional } from 'sequelize';

export interface UserType {
  id: number;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
}
export type UserInput = Optional<UserType, 'id'>;
export type UserOutput = Required<UserType>;
