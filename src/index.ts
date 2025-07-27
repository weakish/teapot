import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import * as fs from 'fs'
import * as path from 'path'

const app = new Hono()

// Serve the teapot image with HTTP 418 status
const teapotHandler = async (c: any) => {
  const imagePath = path.join(process.cwd(), 'joni-ludlow-rqaSSf7N3rc-unsplash.jpg')
  
  if (!fs.existsSync(imagePath)) {
    return c.text('Teapot image not found', 404)
  }

  const imageBuffer = fs.readFileSync(imagePath)
  
  return c.body(imageBuffer, 418, {
    'Content-Type': 'image/jpeg',
  })
}

// Health check endpoint
const healthHandler = (c: any) => {
  return c.json({ status: 'ok' })
}

// Routes
app.get('/', teapotHandler)
app.get('/teapot', teapotHandler)  
app.get('/health', healthHandler)

const port = process.env.PORT ? parseInt(process.env.PORT) : 8000

console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})