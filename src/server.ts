import fastify from "fastify";

const app = fastify();

app.get("/test", () => {
    return "Hello NLW";
});

app.listen({ port: 3333 }).then(() => {
    console.log("server running");
});