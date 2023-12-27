#!/usr/bin/env node

// hello world with express
// Express - is a commonly used web framework that is useful for creating Http APIs.

// Import the top-level function of express
const express = require('express');

// Create an Express application using the top-level function
const app = express();

// define port number as 3000
const port = 3000;

// Routes Http GET requests to the specified path "/" with the specified callback function
app.get('/', function(request, response) {
    response.send('Hello, Joe!')
});

// Make the app listen on port 3000
app.listen(port, function(){
    console.log('Server listening on http://localhost:'+ port)
});
