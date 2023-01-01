const express = require ('express'); //import the package
const router = express.Router();
const CodeBlock = require('../models/CodeBlock');

//get a specific codeBlock
router.get('/:id', async (req, res) => {
    // get the codeBlock ID from the request parameters
    const codeBlockId = req.params.id;
    try {
        // execute a query to find the codeBlock with the specified ID
        const codeBlock = await CodeBlock.findById(codeBlockId);
        // send the result to the client
        res.send(codeBlock);
    } catch (err) {// handle any errors
        res.json({ message: err });
    }
});

// //update a specific codeBlock's code
// router.patch('/:id', async (req, res) => {
//     // get the codeBlock ID from the request parameters
//     const codeBlockId = req.params.id;
//    try{
//         const updatedCodeBlock = await CodeBlock.updateOne({ _id: codeBlockId }, { $set: {code: req.body.code}});
//         res.json(updatedCodeBlock);
//     } catch(err){// handle any errors
//         res.json({ message: err });
//     }
// })

//update a specific codeBlock's code
router.put('/:id', async (req, res) => {
    // get the codeBlock ID from the request parameters
    const codeBlockId = req.params.id;
   try{
        const updatedCodeBlock = await CodeBlock.updateOne({ _id: codeBlockId }, { $set: {code: req.body.code}});
        res.json(updatedCodeBlock);
    } catch(err){// handle any errors
        res.json({ message: err });
    }
})

// //remove a specific codeBlock
// router.delete('/:id', async (req, res) => {
//     // get the codeBlock ID from the request parameters
//     const codeBlockId = req.params.id;
//    try{
//         const remevedCodeBlock = CodeBlock.remove({ _id: codeBlockId });
//         res.json(remevedCodeBlock);
//    } catch(err) { // handle any errors
//         console.error(err);
//    }
// });

module.exports = router;