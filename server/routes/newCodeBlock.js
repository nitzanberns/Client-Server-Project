const express = require ('express'); //import the package
const router = express.Router();
const CodeBlock = require('../models/CodeBlock');

//add new codeBlock
router.post('/', async (req, res) => {
    //create a new codeBlock
    const codeBlock = new CodeBlock({
        //"id": req.body.id,
        "title": req.body.title,
        "code":  req.body.code,
        //"firstVisited": false //??????????????????????????????????????????????????????????? when it becomes true???
    });
    try{
        // save the codeBlock to the database
        const savedCodeBlock = await codeBlock.save()
        res.json(savedCodeBlock);
    }catch(err){
        res.json({ message: err });
    }
});
                                    


// router.post('/', async (req, res) => {
//     try {
//         // //console.log(req.body);

//         // // create a new codeBlock
//         // const codeBlock = new CodeBlock({
//         //   "id": req.body.id,
//         //   "title": req.body.title,
//         //   "code":  req.body.code,
//         //   "firstVisited": false //??????????????????????????????????????????????????????????? when it becomes true???
//         // });
//         // // save the codeBlock to the database
//         // await codeBlock.save();
//         // // send the result to the client
//         // res.send(codeBlock);
//     } catch (err) {
//         // handle any errors
//         //console.error(err);
//         //res.status(500).send({ err: 'An error occurred' });
//         console.log("i have a error");
//         console.log(err);
//     }
// });

module.exports = router;