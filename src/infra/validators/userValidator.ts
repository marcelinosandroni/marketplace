import {userSchema} from './schemas/userSchema'
import {validator} from './config/validator'
import {User} from '../../domain/entities/user'

const validate = validator.compile(userSchema)

export const userValidator = (data: Partial<User>) => {
  const isValid = validate(data)
  if (!isValid) {
    console.error(validate.errors)
  }
}
