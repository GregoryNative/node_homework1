const http = require('http');

const httpServer = http.createServer(function(req,res){
  res.end("Hello world");
});

httpServer.listen(3000,function(){
  console.log('The HTTP server is running');
});

