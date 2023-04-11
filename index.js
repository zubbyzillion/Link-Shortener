const express = require("express");

const app = express();

app.use(express.static("URL Shorts"));

app.get("/", function(request, response){
    response.sendFile(__dirname + "URL Shorts/index.html");
});

app.listen(5000);