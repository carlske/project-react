import type { UserInterface } from '@/types/api';
import { getDatabaseTable } from './helpers';

export const getUserById = (id: number): UserInterface | undefined => {
  const users = getDatabaseTable('users');
  if (!users) {
    console.log('No users table found');
    return;
  }

  return users.find((user: UserInterface) => user.id === id);
};

export const getUser = (data: UserInterface): UserInterface | undefined => {
  const { email, password } = data;

  const users = getDatabaseTable('users');
  if (!users) {
    console.log('No users table found');
    return;
  }

  const user = users.find(
    (user: UserInterface) => user.email === email && user.password === password,
  );

  return user;
};
