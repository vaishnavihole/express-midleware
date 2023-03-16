import express from "express";

const app = express();
app.use(express.json())

const PORT = 5000;

const simpleFunction = (req, res, next)=>{
    const token = req.body.token || req.query.token;
    if(token==="Vaishu"){
        next();
    }
    else{
        return res.json({
            success: false,
            data:null,
            message: "Token is incorrect"
        })
    }
}


app.get('/rooms', simpleFunction, (req, res)=>{
    const rooms = "Room Data";

    res.json({
        success: true,
        data:rooms,
        message: "Room fetched successfully"
    })
})


app.listen(PORT, ()=>{
console.log(`Server started on Port ${PORT}`)
})
