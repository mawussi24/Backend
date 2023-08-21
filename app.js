const express=  require (express);
const app= express();

app.get('/',(req,res)=>{
    res.send("Hello world")
});

app.listen(3000, ()=>console.log(" l'application asse par le port 3000."));
