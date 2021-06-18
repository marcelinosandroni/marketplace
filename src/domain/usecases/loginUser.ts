import {User} from '../entities/user'

export interface LoginUser {
  login: (
    email: User['email'],
    password: User['password']
  ) => Promise<User | void>
}
