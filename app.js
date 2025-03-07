const express = require('express');
const app = express();
const PORT = 3002;
const path = require('path');
const fs = require('fs');
const {json} = require("express");

const filePath = path.join(__dirname, "dataprac.json");



app.use(express.static("public"))
app.use(express.json());




app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname,  "index.html"))
})


// 데이터 조회, 파일 존재 유무 확인
app.get('/dataprac', async (req,res) => {
    const data = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(data);

    res.json(jsonData);

})




app.post("/write", function(req,res) {
    console.log("write 요청 받음")

    // 파일 유무 확인 후 데이터 추가
    if (!fs.existsSync(filePath)) {
        const newBody = req.body;

        console.log("파일이 없습니다. 새 파일을 생성합니다.");
        fs.writeFileSync(filePath, JSON.stringify([newBody], null, 2));
        return res.json({ message: "새 파일 생성 및 데이터 추가 완료", data: newBody });
    }









})

app.listen(PORT, function() {
    console.log("http://localhost:3002/")
})