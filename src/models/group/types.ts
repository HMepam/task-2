import { Optional } from 'sequelize';

export enum PermissionEnum {
  READ = 'READ',
  WRITE = 'WRITE',
  DELETE = 'DELETE',
  SHARE = 'SHARE',
  'UPLOAD_FILES' = 'UPLOAD_FILES'
}

export type PermissionType = PermissionEnum;

export type GroupType = {
  id: string;
  name: string;
  permissions: Array<PermissionType>;
};

export type GroupInput = Optional<GroupType, 'id'>;
export type GroupOutput = Required<GroupType>;
