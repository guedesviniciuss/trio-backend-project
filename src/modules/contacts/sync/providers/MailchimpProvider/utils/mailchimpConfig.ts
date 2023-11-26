import mailchimp from '@mailchimp/mailchimp_marketing'
import { env } from '@/infra/environment'

const {
  MAILCHIMP_API_KEY,
  MAILCHIMP_SERVER_PREFIX
} = env

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER_PREFIX
})

export {
  mailchimp
}
