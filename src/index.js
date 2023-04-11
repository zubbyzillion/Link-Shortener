const express = require("express");

const app = express();

app.use(express.static("src"));

app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
});

app.listen(5000);