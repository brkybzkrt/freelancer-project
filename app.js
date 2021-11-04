const express = require('express');
const pageRoute = require('./routes/pageRoute')

const app=express();

app.set('view engine', 'ejs');


app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended:true }));


const port =process.env.PORT || 5000;


//Routes
app.use('/',pageRoute);


app.listen(port,()=>{
    console.log(`listening on ${port}`);
})