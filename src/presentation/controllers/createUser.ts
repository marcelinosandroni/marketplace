import {CreateUser} from '../../domain/usecases/createUser'
import {Controller} from '../contracts/controller'
import {created, HttpRequest, HttpResponse} from '../contracts/http'

export class CreateUserController implements Controller {
  constructor(private readonly service: CreateUser) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const data = request.body
    const user = await this.service.create(data)
    return created(user)
  }
}
