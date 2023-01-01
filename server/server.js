const express = require ('express'); //import the package

const app = express(); //excecute the package

const port = 3001

//start listening to the server:
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })


//bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.json());


//Import Routes:
const lobbyRoute = require ('./routes/lobby');
const codeBlockRoute = require ('./routes/codeBlock');
const newCodeBlockRoute = require ('./routes/newCodeBlock');

// //Middlewares
app.use('/', lobbyRoute);
app.use('/newCodeBlock', newCodeBlockRoute);
app.use('/codeBlock', codeBlockRoute);


//DATABASE:
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    // await mongoose.connect('mongodb://127.0.0.1:27017/test');

    //connect to DB
    await mongoose.connect('mongodb+srv://moveoTask:qwe123@cluster0.51emnwa.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true,},
     () => console.log("connected to DB"));
    }

    // Set `strictQuery: false` to opt in to filtering by properties that aren't in the schema
    mongoose.set('strictQuery', false);
    
    // //define codeBlock
    // const codeBlockSchema = new mongoose.Schema({
    //     // id: {
    //     //     type: String,
    //     //     default:() => {
    //     //         const {ObjectId} = require('mongodb'); 
    //     //         console.log(ObjectId());
    //     //     }
    //     // },
    //     id: String,
    //     title: String,
    //     code: String,
    //     firstVisited: Boolean //true -> mentor, false -> student
    // });

    // //compiling our schema into a Model.
    // //a model is a class with which we construct documents.
    // const CodeBlock = mongoose.model('CodeBlock', codeBlockSchema);


    //const codeBlock = new CodeBlock({ title: "Async case", code: "async function asyncFunc() {            try {            *something*            } catch (err){                console.error(err);            }}", firstVisited: false });

    //codeBlock.save();

    // console.log(someCodeBlock.title); // 'hello'



