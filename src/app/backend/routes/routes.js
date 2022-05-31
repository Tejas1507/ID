const express = require('express');
const router = express.Router();

const ObjectId = require('mongoose').Types.ObjectId;

const People = require('../model/people.js');


// Base path http://localhost:3000/people

    //Get API
router.get('/', (req, res)=>{
    People.find((err, doc) => {
        if(err){
            console.log('Error in Get Data' + err );
        }else{
            res.send(doc);
        }
    })
});

    //Single Get API
router.get('/:id', (req, res)=>{
    if(ObjectId.isValid(req.params.id)){
        People.findById(req.params.id, (err, doc) => {
            if(err){
                console.log('Error in Get People by id' + err );
            }else{
                res.send(doc);
            }
    })
    }else{
        return res.status(400).send('No record found with id' + req.params.id)
    }
});

    //Post API 
router.post('/', (req, res)=>{
    let ppl = new People ({
    fname: req.body.fname,
    lname: req.body.lname,
    monum: req.body.monum,
    email: req.body.email,
    pass: req.body.pass,
    address: req.body.address,
    gender: req.body.gender,
    dob: req.body.dob
    });

    ppl.save ((err, doc) =>{
        if(err){
            console.log('Error in Post Data' + err );
        }else{
            res.send(doc);
        }
    })
});

    //Put API
 router.put('/:id', (req, res)=>{
    if(ObjectId.isValid(req.params.id)){
        
        let ppl = {
            fname: req.body.fname,
            lname: req.body.lname,
            monum: req.body.monum,
            email: req.body.email,
            pass: req.body.pass,
            address: req.body.address,
            gender: req.body.gender,
            dob: req.body.dob
            };

       People.findByIdAndUpdate(req.params.id, {$set: ppl} , {new: true} , (err, doc) => {
           if(err){
               console.log('Error in Updating People by id' + err );
           }else{
               res.send(doc);
           }
   })
   }else{
       return res.status(400).send('No record found with id' + req.params.id)
       }
});

    //Delete API
router.delete('/:id', (req, res)=>{
     if(ObjectId.isValid(req.params.id)){
        People.findByIdAndRemove(req.params.id, (err, doc) => {
            if(err){
                console.log('Error in Delete People by id' + err );
            }else{
                res.send(doc);
            }
    })
    }else{
        return res.status(400).send('No record found with id' + req.params.id)
        }
});


module.exports = router;