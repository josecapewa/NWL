import { FastifyInstance } from "fastify";
import zod from "zod";

export async function createTrip(app: FastifyInstance){
    app.post("/trips", async () => {
        return "Hello world";
    })
}