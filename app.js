require('./public/qrious');

const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/output',(req,res)=>{

    var qrCodeData =req.body.input;

    console.log(qrCodeData);

    res.render('output',{qrCodeDataa:qrCodeData});


})

app.listen(3000||process.env.PORT,a=>console.log('the server started at port 3000'));