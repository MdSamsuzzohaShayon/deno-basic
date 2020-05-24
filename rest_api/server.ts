// USING THIRD PARTY MODULE
// https://deno.land/x
// https://deno.land/x/oak
// https://deno.land/x/oak/mod.ts
import {Application, Router} from "https://deno.land/x/oak/mod.ts";
const port = 5000;

const app = new Application();

// WE NEED ATLEAST ONE ROUTE OTHERWISE IT WON'T RUN
const router = new Router();
app.use(router.routes());
app.use(router.allowedMethods());


router.get('/api/v1/products', ({response}: {response: any})=>{
    response.body = "Hello World";
});

console.log(`Server is running on localhost:${port}`);
await app.listen({port});