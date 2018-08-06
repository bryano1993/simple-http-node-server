console.log("Starting app.");

const http = require("http");
const fs = require("fs");

function send404Response(response) {
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.write("Error 404: Page not found");
  response.end();
}

function onRequest(request, response) {
  if (request.method == "GET" && request.url == "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.appendFile("hello-world.txt", "Hello to this great world", function(
      err
    ) {
      if (err) {
        console.log("Unable to write to file");
      }
    });
  } else {
    send404Response(response);
  }
}

http.createServer(onRequest).listen(3000);
console.log("Server is now running");
