#!/usr/bin/env node
/*Basic routing of http server*/

const http = require('http');

// function index(request, response){
//     response.writeHead(200);
//     response.end('Hello, Praise!');
// }

// http.createServer(function (request, response) {
//     if (request.url === '/'){
//     return index(request, response);
// }
//     response.writeHead(404);
//     response.end(http.STATUS_CODES[404]);

// }).listen(1337);


// lets store all of routes in an object.

var routes = {
    '/': function index(request, response) {
        response.writeHead(200);
        response.end('Hello, World!');
    },
    '/foo': function foo(request, response){
        response.writeHead(200);
        response.end('You are now viewing "foo"')
    }
    
    }

    http.createServer(function (request, response){
        if (request.url in routes) {
            return routes[request.url](request, response)
        }
        response.writeHead(404)
        response.end(http.STATUS_CODES[404]);

}).listen(1337);
