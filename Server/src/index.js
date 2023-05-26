/* web server escritura basica

const http= require("http");
const {getCharById} = require("./controllers/getCharById.js")

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character")){
        let id= req.url.split("/").at(-1);
        getCharById(res, id)
    }
}).listen(3001,"localhost")*/


// escritura usando la libreria "express"
//modularizado


const server= require("./app")
const PORT = 3001;

server.listen(PORT)
