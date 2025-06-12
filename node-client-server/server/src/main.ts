import { ServerResponse } from "http";
import { Http2ServerRequest } from "http2";

const http = require("http");

const headers = {
  "Access-Control-Allow-Origin": "*" /* @dev First, read about security */,
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
};

http
  .createServer(function (
    request: Http2ServerRequest,
    response: ServerResponse
  ) {
    console.log(`incoming request from ${request.headers.origin}`);

    response.writeHead(200, headers);
    response.write("Hello World from Server!"); //write a response to the client
    response.end(); //end the response
  })
  .listen(8081);
