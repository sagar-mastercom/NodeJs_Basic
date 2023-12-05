const http = require('http');
const url = require('url');
const PORT = 8080;

const httpServer = http.createServer((req, res) => {
    const httpPath = url.parse(req.url).pathname;
    if (httpPath==="/hello"){
        res.write("Hello, world!");
        res.end();
    }
    
})


httpServer.listen(PORT,()=> {
    console.log("Sever is ready on port " + PORT)
});