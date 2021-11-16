const express= require('express');
const app= express();
const port= 6000;
const bodyParser= require('body-parser');
const ejs= require('ejs');

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

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send(`HOLA el servidor esta corriendo en el puerto ${port}`);
})

app.post('/flores',(res,req)=>{
    req.body( body.array.forEach(element => {
        suma+=element.precio;   
         })
    )
    res.send(`el costo final es de:${suma}`)
})



app.listen(port,()=>{
    console.log(`el servidor esta corriendo en el puerto ${port}`)
})