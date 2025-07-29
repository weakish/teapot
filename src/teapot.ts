import { Hono } from 'hono'
import type { Context } from 'hono'

const app = new Hono()

// Serve the teapot image with HTTP 418 status
const teapotHandler = async (c: Context) => {
  try {
    // In Netlify Edge Functions, we can read files using fetch with file:// protocol
    // or use Deno.readFile API
    const imageData = await Deno.readFile('./images/joni-ludlow-rqaSSf7N3rc-unsplash.jpg')
    
    return c.body(imageData, 418, {
      'Content-Type': 'image/jpeg',
    })
  } catch (error) {
    // Fallback if file reading fails
    return c.text('I\'m a teapot', 418)
  }
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