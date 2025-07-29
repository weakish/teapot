# Teapot Server

A simple HTTP server that implements RFC 2324 (Hyper Text Coffee Pot Control Protocol) by returning HTTP 418 "I'm a teapot" status code.

## Implementations

This project provides multiple implementations:

### TypeScript (Hono)

A modern implementation using [Hono](https://hono.dev/) web framework, designed to run on Netlify Edge Functions.

**Deployment:**

Deploy to Netlify by connecting your repository. The application will automatically run as a Netlify Edge Function using the `src/teapot.ts` file.

**Local Development:**

With Bun:
```sh
bun install
bun run src/teapot.ts
```

With Deno:
```sh
deno run --allow-net --allow-read src/teapot.ts
```

**Endpoints:**
- `GET /` - Returns HTTP 418 with teapot image
- `GET /teapot` - Returns HTTP 418 with teapot image  
- `GET /health` - Returns HTTP 200 with `{"status": "ok"}`

### Python (Starlette)

Alternative implementation using Starlette framework.

**Requirements:**
- Python 3.7+
- pip

**Setup and Run:**
```sh
cd python
pip install -r requirements.txt
python -m uvicorn teapot:app --host 0.0.0.0 --port 8000
```

### Java (Vert.x)

Alternative implementation using Vert.x framework.

**Requirements:**
- Java 8+
- Gradle

**Setup and Run:**
```sh
cd vert.x
./gradlew shadowJar
java -jar build/libs/teapot-3.5.4-fat.jar
```

## License

0BSD (BSD Zero Clause License)

## Image Credit

Teapot image by [Joni Ludlow](https://unsplash.com/@joni_ludlow) on [Unsplash](https://unsplash.com/photos/white-blue-and-red-ceramic-teapot-pouring-water-on-white-ceramic-teacup-rqaSSf7N3rc). Licensed under the Unsplash License.