import {Express, Router} from 'express'
import {readdirSync} from 'fs'
import {resolve} from 'path'

export const setupRoutes = (app: Express) => {
  const router = Router()
  const routesPath = resolve(__dirname, '..', 'routes')
  importRoutes(routesPath, router)
  app.use('/api', router)
}

const importRoutes = (routesPath: string, router: Router) => {
  const fileExtension = RegExp(/(ts|js)$/)

  readdirSync(routesPath).map(async fileName => {
    if (!fileExtension.test(fileName)) {
      return importRoutes(`${routesPath}/${fileName}`, router)
    }
    const files = await import(`${routesPath}/${fileName}`)
    if (typeof files.default !== 'function') {
      return console.log(`file ${fileName} have no default export`)
    }
    files.default(router)
  })
}
