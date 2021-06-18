import {Schema, model} from 'mongoose'
import {UserRepository} from '../../../../data/contracts/userRepository'
import {User} from '../../../../domain/entities/user'

const userSchema = new Schema<User>({
  name: String,
  email: String,
  password: String
})

export class UserMongoRepository implements UserRepository {
  collection = model<User>('User', userSchema)

  async save(data: User) {
    const createdUser = await this.collection.create(data)
    if (!createdUser) {
      throw new Error('problemo no db')
    }

    return createdUser
  }
}
