const express=require('express')
const upMoviesData=require('./upcmngmovies')
const router=require('./route')
const cors=require('cors')
const app=express()

app.use(cors({
    origin:"http://localhost:5000"
}))



app.use(express.json())

app.use('/',router)



app.listen(5000,()=>{
    console.log(`http://localhost:5000`)})

