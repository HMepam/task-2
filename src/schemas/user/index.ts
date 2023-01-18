import { Schema, model } from 'mongoose';
import { IUser } from './type';

const userSchema = new Schema<IUser>({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  isDeleted: { type: Boolean, required: true, default: false }
});

export const UserSchema = model<IUser>('User', userSchema);
