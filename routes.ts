import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import db from "./mongodb.ts";


const notesCollection = db.collection('notes');


const getNotes = async (ctx: RouterContext )=>{
    const notes = await notesCollection.find();
    // ctx.response.body = "get notes";
    ctx.response.body = notes;
}







const getSingleNote = async (ctx: RouterContext )=>{
    const id = ctx.params.id;
    const note = await notesCollection.findOne({_id: {$oid: id}});
    // ctx.response.body = "get notes";
    ctx.response.body = note;
}






const createNote = async (ctx: RouterContext )=>{
    // const body = await ctx.request.body();
    // DESTRUCTURING THE VALU
    const { value: {title, body} } = await ctx.request.body();
    console.log(title, body);
    
    const note: any = {
        title,
        body,
        date: new Date()
    }
    const id = await notesCollection.insertOne(note) ;
    console.log(id);

    note._id = id;
    ctx.response.status = 201;
    ctx.response.body = note;
}





const updateNote = async (ctx: RouterContext )=>{
    const id = ctx.params.id;
    const { value: {title, body} } = await ctx.request.body();
    const {modifiedCount} = await notesCollection.updateOne({_id: {$oid: id}}, {
        $set:{
            title,
            body
        }
    });
    console.log(modifiedCount);
    
    // ctx.response.body = "get notes";

    if(!modifiedCount){
        ctx.response.status = 404;
        ctx.response.body = {message: "no note"};
        return ;
    }
    ctx.response.body = await notesCollection.findOne({_id: {$oid: id}});
}




const deleteNote = async (ctx: RouterContext )=>{
    const id = ctx.params.id;
    const count = notesCollection.deleteOne({_id: {$oid: id}});
    if(!count){
        ctx.response.status = 404;
        ctx.response.body = {message: "no note"};
        return ;
    }

    ctx.response.status = 402;
};


export {getNotes, getSingleNote,  createNote, updateNote, deleteNote};