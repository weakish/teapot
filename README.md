# Teapot Server

A simple HTTP server that implements RFC 2324 (Hyper Text Coffee Pot Control Protocol) by returning HTTP 418 "I'm a teapot" status code.

## Implementations

This project provides multiple implementations:

### Hono (Node.js/TypeScript) - Main Implementation

A modern implementation using [Hono](https://hono.dev/) web framework.

**Requirements:**
- Node.js 18+
- npm

**Setup and Run:**
```bash
npm install
npm run dev
```

**Endpoints:**
- `GET /` - Returns HTTP 418 with teapot image
- `GET /teapot` - Returns HTTP 418 with teapot image  
- `GET /health` - Returns `{"status": "ok"}`

### Python (Starlette)

Legacy implementation using Starlette framework.

**Requirements:**
- Python 3.7+
- pip

**Setup and Run:**
```bash
pip install -r requirements.txt
python -m uvicorn teapot:app --host 0.0.0.0 --port 8000
```

### Java (Vert.x)

Alternative implementation using Vert.x framework.

**Requirements:**
- Java 8+
- Gradle

**Setup and Run:**
```bash
cd vert.x
./gradlew shadowJar
java -jar build/libs/teapot-3.5.4-fat.jar
```

## License

See LICENSE file.

## Image Credit

Teapot image by Joni Ludlow on Unsplash.