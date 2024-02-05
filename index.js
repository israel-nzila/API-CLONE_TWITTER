const express= require("express");
const app = express();
const port =3000;

app.get("/",(req,res)=>{

    const post=[
        {ID: 1,
        username:"israel",
        password:"ghghghghghg"
        },
        {ID: 2,
            username:"AZERTT",
            password:"eea1234"
            }
    ]
    res.json(post)
})






app.listen(port,()=>{
    console.log("serveur démaré");
})
