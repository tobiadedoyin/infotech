import express, {Request, Response} from "express";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/post", (req:Request, res:Response)=>{
    res.status(201).json({data: req.body})   
})

app.get("/:id/:name", (req:Request, res:Response)=>{
    res.send({message: "welcome again", Id: req.params.id, name: req.params.name })
})

export default app; 