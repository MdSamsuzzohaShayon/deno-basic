// USING THIRD PARTY MODULE
// https://deno.land/x
// https://deno.land/x/oak
// https://deno.land/x/oak/mod.ts
import {Application} from "https://deno.land/x/oak/mod.ts";
const port = 5000;

const app = new Application();

import router from './routes.ts';

// WE NEED ATLEAST ONE ROUTE OTHERWISE IT WON'T RUN

app.use(router.routes());
app.use(router.allowedMethods());




console.log(`Server is running on localhost:${port}`);
await app.listen({port});