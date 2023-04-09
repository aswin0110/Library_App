const express = require('express')
const router = express.Router()
const DATA = require('../model/model')

const jwt = require('jsonwebtoken')

function verifyToken(req,res,next){

    try {
    if(!req.headers.authorization) throw('unautharized')
    let  token = req.headers.authorization.split(' ')[1]
    if(!token) throw ('unautharized')

    let payload = jwt.verify(token,'12545845asdasdaf2144141')

    if (!payload) throw('unautharized')

    res.status(200).send(payload)
    next()
        
    } catch (error) {
        console.log(error);
        res.send(401).send(error)
        
    }




}

// GET DATA

router.get('/library' , async (req,res)=>{
    try {
        
        const list = await DATA.find()
        res.send(list)
    } catch (error) {
        console.log(error.message);
    }
})

// POST DATA

router.post('/library',async (req,res)=>{
    try {
        console.log(req.body);

    let item = {
        title: req.body.title,
        auther: req.body.auther,
        content: req.body.content
    }

    const newBook = new DATA(item)
    const saveBook = await newBook.save()

    res.send(saveBook)
        
    } catch (error) {
        console.log(error.message);
        
    }
})

// DELETE BOOK

router.delete('/library/:id' ,verifyToken, async (req,res) =>{
    try {
        let id = req.params.id

        let token = req.headers
        // console.log('token',token);


        const deleteBook = await DATA.findByIdAndDelete(id)
        res.send(deleteBook)
        console.log(id);
        
    } catch (error) {
        console.log(error.message);

        
    }
})




module.exports = router