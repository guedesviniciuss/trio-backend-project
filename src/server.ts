import 'express-async-errors'

import { app } from './app'
import { env } from '@/infra/environment'

const { PORT } = env

app.listen(PORT, () => {
  console.log(`application running on http://localhost:${PORT} 🚀`)
})
