const express = require('express');
const app = express();
const PORT = 3002;
const path = require('path');


app.use(express.static("public"))


app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname,  "index.html"))
})


app.post("/write", function(req,res) {
    console.log("write 요청 받음")



})



app.listen(PORT, function() {
    console.log("http://localhost:3002/")
})