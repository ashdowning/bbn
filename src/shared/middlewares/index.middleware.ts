import { INestApplication } from '@nestjs/common'
import path from 'path'
import serveFavicon from 'serve-favicon'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { CORS_ORIGINS } from '../constants'

export const configMiddlewares = (app: INestApplication) => {
  const isEnvProduction = process.env.NODE_ENV === 'production'

  app.use(serveFavicon(path.join(process.cwd(), 'public/favicon.ico')))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(morgan('combined'))
  app.use(helmet())
  app.enableCors(
    isEnvProduction
      ? {
          origin: CORS_ORIGINS,
          methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
          credentials: true,
          preflightContinue: true,
          optionsSuccessStatus: 204,
        }
      : {},
  )
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
    }),
  )
}
