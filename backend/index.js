const express=require('express')
const port=3000;
const app=express()

app.get('/',(req,res)=>{
    res.send('app backend')
})

app.listen(port,()=>{
    console.log(`app started at port ${port}`)
})