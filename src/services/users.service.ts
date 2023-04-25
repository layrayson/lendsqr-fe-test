import { PageMeta } from './../types/pagination.type';
import axiosClient from '@/axios/axios.config';
import { UserModel } from '@/types/user.type';

export class UsersService {
  static findAllUsers = async ({
    pagination,
  }: {
    pagination: PageMeta;
  }): Promise<UserModel[]> => {
    const response = await axiosClient.get<UserModel[]>(
      `/users?page=${pagination.page}&limit=${pagination.limit}`,
    );

    return response.data;
  };
}
