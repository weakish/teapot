package page.mmap.teapot;

import io.vertx.core.AbstractVerticle;

public class Server extends AbstractVerticle {

    public void start() {
        vertx.createHttpServer().requestHandler(req -> req.response()
                .setStatusCode(418)
                .putHeader("content-type", "text/plain")
                .end("I'm a teapot!")).listen(8080);
    }
}

