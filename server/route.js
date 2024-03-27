const express=require('express')
const upMoviesData=require('./upcmngmovies')
const router=express.Router()


router.get('/',(req,res)=>{
    res.send(upMoviesData) 
})

module.exports=router