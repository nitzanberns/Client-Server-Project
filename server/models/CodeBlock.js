const mongoose = require('mongoose');

 //define codeBlock
 const codeBlockSchema = mongoose.Schema({
    // id: {
    //     type: String,
    //     default:() => {
    //         const {ObjectId} = require('mongodb'); 
    //         console.log(ObjectId());
    //     }
    // },
    id: String,
    title: String,
    code: String,
    //firstVisited: Boolean //true -> mentor, false -> student
});

//compiling our schema into a Model.
//a model is a class with which we construct documents.
module.exports = mongoose.model('CodeBlock', codeBlockSchema); 