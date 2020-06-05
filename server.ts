// https://www.youtube.com/watch?v=TMPBEkfIPWk&t=1699s
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const router = new Router();
import {getNotes, getSingleNote, updateNote,createNote, deleteNote } from "./routes.ts";


router
    .get('/', (ctx)=>{
        ctx.response.body = "Welcome to notes api";
    })
    .get('/notes', getNotes)
    .get('/notes/:id', getSingleNote)
    .post('/notes', createNote)
    .put('/notes/:id', updateNote)
    .delete('/notes/:id', deleteNote)

;


const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port: 8000});
console.log("Server is up and running");


