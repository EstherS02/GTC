const express = require("express");
const app = express();
const request = require("request");

app.get('/', (req,res)=>{
    request("http://localhost:8080/api/tasks", function (error, response, body) {
        if (error) {
            console.log(error);
        }
<<<<<<< HEAD
        console.log("Hello!")
        console.log("Good morning!")
=======
        console.log("Hello!");
        console.log("welcome");
>>>>>>> 6364e7399032d0ea90124c3be394b4c42e31baca
        console.log(response);
        console.log(body);
    });
});

app.listen(4500,()=>{
    console.log('Server is up on port 8080');
});