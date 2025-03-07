const express = require('express');
const app = express();
const PORT = 3002;
const path = require('path');
const fs = require('fs');



app.use(express.static("public"))

//express는 POST요청의 body(요청)을 파싱하지 않음

// URL 인코딩된 본문 데이터를 파싱함
//extend:false => querystring 라이브러리를 사용해서 간단한 문자열, 배열형태의 데이터만 파싱
//extend:true => qs 라이브러리를 사용해서 복잡한 객체형태의 데이터도 파싱
app.use(express.urlencoded({extended: false}));

//JSON 형태의 본문 데이터를 파싱함
app.use(express.json());

//이 두가지 미들웨어를 사용하면 body를 파싱함

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname,  "index.html"))
})


app.get('/dataprac', function(req,res) {

    res.sendFile(path.join(__dirname, "dataprac.json"))



})

app.post("/write", function(req,res) {
    console.log("write 요청 받음")
    // const data = req.body;
    // console.log(data) // {} 빈 객체 나옴

    console.log(req.body) // {} 빈 객체 나옴 

    //입력 데이터 확인하기

    //json파일이 없으면 [] 넣어서 생성하기

    //json파일 데이터 가져오기

    //입력 데이터 가져오기

    //json파일에 데이터 추가하기

    // jsonData.push(data)
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



})

app.listen(PORT, function() {
    console.log("http://localhost:3002/")
})