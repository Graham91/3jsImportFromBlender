var http = require("http");

// Define a port to listen for incoming requests

var express = require("express");
var app = express();
var PORT = 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end(fs.readFileSync(filePath, { encoding: 'utf8' }));
}
const path = require('path');
const fs = require('fs');

const fileName = 'index.html';

const filePath = path.join(
    __dirname,
    fileName
);

// console.log(fileContent);

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);


// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});