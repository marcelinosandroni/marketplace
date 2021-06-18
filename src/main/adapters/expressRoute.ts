import {Request, Response} from 'express'
import {Controller} from '../../presentation/contracts/controller'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    console.log(`body: ${req.body}`)
    const {code, data} = await controller.handle(req)
    res.status(code).send(data)
  }
}
