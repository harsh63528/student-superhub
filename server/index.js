import http from 'node:http'

const server=http.createServer((req,res)=>{
    if('/'){
        res.end('hello i m running')
    }
})

server.listen(8000,()=>{
    console.log('i am running on 8000')
})