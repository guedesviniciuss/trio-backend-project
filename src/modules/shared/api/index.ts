import axios from 'axios'

const api = axios.create({
  baseURL: 'https://challenge.trio.dev'
})

export {
  api
}
