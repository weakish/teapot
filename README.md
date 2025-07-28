# Teapot Server

A simple HTTP server that implements RFC 2324 (Hyper Text Coffee Pot Control Protocol) by returning HTTP 418 "I'm a teapot" status code.

## Implementations

This project provides multiple implementations:

### TypeScript

A modern implementation using [Hono](https://hono.dev/) web framework. Hono can run on Node.js, Bun, Deno, and edge environments.

**Requirements:**
- Node.js 18+ / Bun / Deno

**Setup and Run:**

With npm:
```sh
npm install
npm run dev
```

With pnpm:
```sh
pnpm install
pnpm run dev
```

With Bun:
```sh
bun install
bun run src/index.ts
```

With Deno:
```sh
deno run --allow-net --allow-read src/index.ts
```

For Netlify Edge Functions, deploy the `src/index.ts` file as an edge function.

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