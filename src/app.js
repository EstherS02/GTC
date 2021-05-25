const express = require("express");
const app = express();
const request = require("request");
console.log("Welcome to GTC project")

app.get('/', (req,res)=>{
    request("http://localhost:8080/api/tasks", function (error, response, body) {
        if (error) {
            console.log(error);
        }
        console.log("Hello!");
        console.log("welcome");
        console.log("Test");
        console.log(response);
        console.log(body);
    });

});

app.listen(4500,()=>{
    console.log('Server is up on port 8080');
});