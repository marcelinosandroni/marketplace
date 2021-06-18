import {Router} from 'express'
import {adaptRoute} from '../adapters/expressRoute'
import {makeCreateUserController} from '../factories/controllers/createUserControllerFactory'

export default (router: Router) => {
  const controller = adaptRoute(makeCreateUserController())
  router.post('/user', controller)
}
