import app from "./src/server.js";

const {PORT} = process.env ;


app.listen(PORT,()=>{
    console.log(`http:localhost:${PORT}`)
})