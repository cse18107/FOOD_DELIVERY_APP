const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({
        message:'Its working'
    })
});

app.get('/food/:id',(req,res)=>{

});

app.post('/',(req,res)=>{

});

app.patch('/food/:id',(req,res)=>{

});

app.delete('/food/:id',(res,req)=>{

});



app.listen(4000,()=>{
    console.log("server is running on port 4000");
})