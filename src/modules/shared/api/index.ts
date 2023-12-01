import { env } from '@/infra/environment'
import axios from 'axios'

const { MOCK_API_BASE_URL } = env

const api = axios.create({
  baseURL: MOCK_API_BASE_URL
})

export {
  api
}
