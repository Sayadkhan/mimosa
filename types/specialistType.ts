import { PackageItem } from './packageItem';

export type specialistType = {
  name: string;
  designation: string;
  bio: string;
  photoUrl: string;
  dateOfBirth: string;
  beautyPackages: PackageItem[];
};
