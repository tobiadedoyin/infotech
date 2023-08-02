import app from "./app"
import http from "http"

const server = http.createServer(app)
const PORT = 5050;

server.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})