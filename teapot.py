from http import HTTPStatus
from starlette.applications import Starlette
from starlette.routing import Route
from starlette.responses import FileResponse

async def teapot(request):
    _ = request
    return FileResponse(status_code=HTTPStatus.IM_A_TEAPOT,
            path="joni-ludlow-rqaSSf7N3rc-unsplash.jpg")

app = Starlette(routes=[
    Route('/', endpoint=teapot),
    ])
