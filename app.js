const express = require('express');
const app = express();
const PORT = 3002;
const path = require('path');
const fs = require('fs');



app.use(express.static("public"))
app.use(express.json());
let jsonData = "/dataprac.json"


app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname,  "index.html"))
})


app.get('/dataprac', function(req,res) {

    res.sendFile(path.join(__dirname, "dataprac.json"))



})




app.post("/write", function(req,res) {
    console.log("write 요청 받음")
    const data = req.body;


    jsonData.push(data)
    res.redirect("/")



    // const body = req.body;
    //
    // fs.readFile(path.join(__dirname, 'dataprac.json'))
    //
    // const jsonData = JSON.parse(body);
    // jsonData.push(body);
    //
    // fs.writeFile(path.join(__dirname, 'dataprac.json'), JSON.stringify(jsonData, null, 2))
    //


    //json파일이 없으면 [] 넣어서 생성하기

    //json파일 데이터 가져오기

    //입력 데이터 가져오기

    //json파일에 데이터 추가하기

})

app.listen(PORT, function() {
    console.log("http://localhost:3002/")
})