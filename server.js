const express= require('express');
const app= express();
const port= 6000;
const bodyParser= require('body-parser');
const ejs= require('ejs');
const path= require('path');


app.set('views','ejs');
app.set('public',__dirname,'/public');
var suma=0;

let flores=[
    {
    "nombreFlor":"jazmin","precio":"150", "color":"blanca","img":"../RepasoExamen_Floreria/public/jazmin.jpg"
    } ,
    {
     "nombreFlor":"margarita","precio":"120","color":"blanca","img":"../RepasoExamen_Floreria/public/margarita.jpg"
    },
    {
        "nombreFlor":"lavanda","precio":"180","color":"violeta","img":"../RepasoExamen_Floreria/public/lavanda.jpg"
    }
    ]

app.use(bodyParser.urlencoded({extended:true}));
app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.get('/',(req,res)=>{
    res.send(`HOLA el servidor esta corriendo en el puerto ${port}`);
})

app.get('/index',(res,req)=>{
    res.render("index", {flores:flores});
})



app.listen(port,()=>{
    console.log(`el servidor esta corriendo en el puerto ${port}`)
})