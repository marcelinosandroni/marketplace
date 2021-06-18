import {User} from '../entities/user'

export interface CreateUser {
  create: (user: Omit<User, 'id'>) => Promise<User>
}
