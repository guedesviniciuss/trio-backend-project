import client from '@mailchimp/mailchimp_marketing'
import { env } from '@/infra/environment'

const {
  MAILCHIMP_API_KEY,
  MAILCHIMP_SERVER_PREFIX
} = env

client.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER_PREFIX
})

export {
  client
}
