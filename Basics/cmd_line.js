#!/usr/bin/env node

// Reads the first argument from the command line 
// and prints a Hello message.


'use strict';

/*  
  The command line arguments are stored in the 'process.argv' array,
  which has the following structure:
  [0] - The path of the executable that started the Nodejs process
  [1] - The path to this application.
  [2-n] - the command line arguments.
*/

// store the first argument as username
var username = process.argv[2];

// check if the username hasn't been provided.
if (!username) {

    // Extract the filename
    var appName = process.argv[1].split(require('path').sep).pop();

    // Give the user an example on how to use the app
    console.error('Missing argument! Example: %s YOUR_NAME', appName);

    // Exit the app (success: 0, error: 1)
    // An error will stop the execution chain
    process.exit(1);
}

//Print the message to the console
console.log('Hello %s!', username);