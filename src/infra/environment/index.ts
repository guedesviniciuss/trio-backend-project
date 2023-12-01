import { config } from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
  config({
    path: '.env.test'
  })
} else {
  config({
    path: '.env'
  })
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3333),
  LOG_LEVEL: z.string().default('info'),
  // Services
  MAILCHIMP_API_KEY: z.string(),
  MAILCHIMP_SERVER_PREFIX: z.string(),
  MAILCHIMP_LIST_NAME: z.string(),
  MOCK_API_BASE_URL: z.string(),

  // Security
  CORS_WHITELIST: z.string().optional() // processing before
})

const tempEnv = envSchema.safeParse(process.env)

if (!tempEnv.success) {
  console.error('invalid enviroment variables', tempEnv.error.format())

  throw new Error('invalid enviroment variables')
}

const env = tempEnv.data

export {
  env
}
