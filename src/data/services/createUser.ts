import {User} from '../../domain/entities/user'
import {CreateUser} from '../../domain/usecases/createUser'
import {UserRepository} from '../contracts/userRepository'
import {generateId} from './generateId'
import bcrypt from 'bcrypt'
import {env} from '../../main/config/env'

export class CreateUserService implements CreateUser {
  constructor(private readonly repository: UserRepository) {}

  async create(data: Omit<User, 'id'>): Promise<User> {
    const id = generateId()
    const salt = await bcrypt.genSalt(env.bcryptRounds)
    const password = await bcrypt.hash(data.password, salt)
    const user = {
      ...data,
      id,
      password
    }
    const createdUser = await this.repository.save(user)
    if (!createdUser) {
      throw new Error('cant create user')
    }

    return createdUser
  }
}
