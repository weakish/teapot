import { Hono } from 'hono'
import type { Context } from 'hono'
import * as fs from 'fs'
import * as path from 'path'

const app = new Hono()

// Serve the teapot image with HTTP 418 status
const teapotHandler = async (c: Context) => {
  const imagePath = path.join(process.cwd(), 'images/joni-ludlow-rqaSSf7N3rc-unsplash.jpg')
  const imageBuffer = fs.readFileSync(imagePath)
  
  return c.body(imageBuffer, 418, {
    'Content-Type': 'image/jpeg',
  })
}

// Health check endpoint
const healthHandler = (c: Context) => {
  return c.json({ status: 'ok' })
}

// Routes
app.get('/', teapotHandler)
app.get('/teapot', teapotHandler)  
app.get('/health', healthHandler)

export default app