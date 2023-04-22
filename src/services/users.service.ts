import axiosClient from '@/axios/axios.config';
import { UserModel } from '@/types/user.type';

export class UsersService {
  static findAllUsers = async (): Promise<UserModel[]> => {
    const response = await axiosClient.get<UserModel[]>('/users');

    return response.data;
  };
}
