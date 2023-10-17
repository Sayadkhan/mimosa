import { bookingType } from './bookingType';
import { specialistType } from './specialistType';

export type PackageItem = {
  _id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  price: number;
  specialists: specialistType[];
  bookings: bookingType[];
  createdAt: string;
  updateAt: string;
  _v: number;
};
