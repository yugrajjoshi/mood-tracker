const fs = require('fs');
const http = require('http');
const url = require('url');
let mood="";
let body ="";
const server = http.createServer((request, response) => {

    if(request.method === 'GET' && request.url === '/mood'){
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        response.end( "<!DOCTYPE></>" +
        "<html>" +
        "<head><title>Mood Tracker</title></head>" +
        "<body>" +
        "<h1>HERE'S YOUR MOOD</h1>" +
        "<div id = 'current-mood' border =>" + mood + "</div>"+
        "<hr>" +
        "<h2>Available Operations</h2>" +
        "<h3>1. POST - Add a mood</h3>" +
        "<code>curl -X POST http://localhost:3000/post -d 'posting mood'</code>" +
        "<h3>2. PUT - Replace mood completely</h3>" +
        "<code>curl -X PUT http://localhost:3000/update -d 'update new mood'</code>" +
        "<h3>3. PATCH - Append to mood</h3>" +
        "<code>curl -X PATCH http://localhost:3000/edit -d ' add something'</code>" +
        "<h3>4. DELETE - Clear mood</h3>" +
        "<code>curl -X DELETE http://localhost:3000/delete</code>" +
        "<hr>" +
        "<p><strong>Then refresh this page to see the updated mood!</strong></p>" +
        "</body>" +
        "<style> "+
        "body { font-family: Arial, sans-serif; margin: 20px; } "+
        "h1 { text-align: center; color: #333; } "+
        "h2 { color: #666; } "+
        "h3 { color: #888; margin-top: 15px; } "+
        "code { background: #f4f4f4; padding: 10px; display: block; border-left: 3px solid #4CAF50; margin: 10px 0; font-family: monospace; } "+
        "#current-mood { font-weight: heavy; text-align: center; color: white; width: auto; height: auto; background-color: black; border: 1px solid #ccc; border-radius: 25px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin-top: 20px; font-weight: bold; padding: 15px; } "+
        "</style>"+
        "</html>");
    }
    else if(request.method === 'POST' && request.url === '/post'){
        body ="";
        request.on('data', chunk =>{
            body +=chunk;});
        request.on('end', ()=>{
            mood = body;
            console.log('Mood posted:', mood);
            response.end();
        });   
    }

    else if(request.method === 'PUT'&& request.url === '/update'){
        body ="";
        request.on('data', chunk =>{
            body += chunk 
        });
        request.on('end', ()=>{
            mood = body;
            console.log('Mood replaced to:', mood);
            response.end();
        });
    }
    else if(request.method === 'PATCH'&& request.url === '/edit'){
        body =""; 
        request.on('data', chunk =>{
            body+= chunk;
        });
        request.on('end', ()=>{
            mood += body;
            console.log('Mood edited to:', mood);
            response.end();
         });
    }
    else if(request.method === 'DELETE'&& request.url === '/delete'){
        mood = null;
        body = "";
        console.log('Mood deleted');
        response.end();
    }
    
    else {
        response.writeHead(404, {'Content-Type':'text/plain'});
        response.end('Method not allowed');
    }  

});

server.listen(3000, () => {
  console.log('Mood Tracker Server running on http://localhost:3000/mood');
});


        
