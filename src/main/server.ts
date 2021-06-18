import {app} from './config/app'
import {MongoDatabase} from '../infra/database/mongo/index'
import {env} from './config/env'
import colors from 'colors'
colors.enable()

console.log('Enviroment Variables :'.red.bgYellow.bold, env)

MongoDatabase.connect(env.mongoUrl)
  .then(async () => {
    console.log('Database connected'.green)
    app.listen(env.port, () =>
      console.log(`Market API on at ${env.port} , ready for sale!!!`.blue)
    )
  })
  .catch(error => {
    console.log(`${error.message}`.red)
  })
