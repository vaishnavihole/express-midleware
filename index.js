import express from "express";

const app = express();
app.use(express.json())

const PORT = 5000;


app.get('/rooms', (req, res)=>{
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
