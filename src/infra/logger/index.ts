import winston from 'winston'
import { env } from '../environment'

const { combine, timestamp, json } = winston.format

const { LOG_LEVEL, NODE_ENV } = env

const logger = winston.createLogger({
  level: LOG_LEVEL ?? 'info',
  format: combine(timestamp(), json()),
  transports: [new winston.transports.Console()],
  silent: NODE_ENV === 'test'
})

export default logger
