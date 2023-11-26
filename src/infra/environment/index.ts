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
  // Services
  MAILCHIMP_API_KEY: z.string(),
  MAILCHIMP_SERVER_PREFIX: z.string(),
  MOCK_API_BASE_URL: z.string(),

  // Security
  CORS_WHITELIST: z.string().optional() // processing before
})

const _env = envSchema.safeParse(process.env)

if (!(_env.success)) {
  console.error('Invalid enviroment variables', _env.error.format())

  throw new Error('Invalid enviroment variables')
}

const env = _env.data

export {
  env
}
