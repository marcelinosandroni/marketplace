import {JSONSchemaType} from 'ajv'
import {User} from '../../../domain/entities/user'

export const userSchema: JSONSchemaType<Omit<User, 'status' | 'role'>> = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
      minLength: 8,
      maxLength: 20,
    },
  },
  required: ['name', 'email', 'password'],
}
