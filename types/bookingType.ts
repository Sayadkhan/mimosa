import { PackageItem } from './packageItem';
import { userType } from './userType';

export type bookingType = {
  _id: string;
  user: userType;
  beautyPackage: PackageItem;
  createdAt: string;
  updateAt: string;
  _v: number;
};
