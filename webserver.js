let http = require('http')

http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type' : 'text-plain'})
res.write('Hello world- first page')
    res.end()
}).listen(3000)