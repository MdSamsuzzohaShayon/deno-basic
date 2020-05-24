const encoder = new TextEncoder();

const greetText = encoder.encode('Hello World \nMy name is khan');

// WRITE FILE
// https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts#Deno.writeFile
await Deno.writeFile('greet.txt', greetText);


