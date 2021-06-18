import {CreateUserService} from '../../../data/services/createUser'
import {UserMongoRepository} from '../../../infra/database/mongo/models/user'
import {Controller} from '../../../presentation/contracts/controller'
import {CreateUserController} from '../../../presentation/controllers/createUser'

export const makeCreateUserController = (): Controller => {
  const repository = new UserMongoRepository()
  const service = new CreateUserService(repository)
  return new CreateUserController(service)
}
