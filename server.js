const express= require('express');
const app= express();
const port= 6000;
const bodyParser= require('body-parser');
var suma=0;

[
    {
    "nombreFlor":"jazmin","precio":"150", "color":"blanca"
    } ,
    {
     "nombreFlor":"margarita","precio":"120","color":"blanca"
    },
    {
        "nombreFlor":"lavanda","precio":"180","color":"violeta"
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