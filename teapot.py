from http import HTTPStatus
from starlette.applications import Starlette
from starlette.routing import Route
from starlette.responses import FileResponse, JSONResponse

async def teapot(request):
    _ = request
    return FileResponse(status_code=HTTPStatus.IM_A_TEAPOT,
            path="joni-ludlow-rqaSSf7N3rc-unsplash.jpg")

async def health(request):
    _ = request
    return JSONResponse({"status": "ok"})

app = Starlette(routes=[
    Route('/', endpoint=teapot),
    Route('/teapot', endpoint=teapot),
    Route('/health', endpoint=health),
    ])
