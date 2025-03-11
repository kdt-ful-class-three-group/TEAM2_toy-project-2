import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = 3000;



app.use(express.static("public"));

//!express는 POST요청의 body(요청)을 파싱하지 않음
// URL 인코딩된 본문 데이터를 파싱함
//extend:false => querystring 라이브러리를 사용해서 간단한 문자열, 배열형태의 데이터만 파싱
//extend:true => qs 라이브러리를 사용해서 복잡한 객체형태의 데이터도 파싱
app.use(express.urlencoded({extended: false}));

//JSON 형태의 본문 데이터를 파싱함
app.use(express.json());
//*이 두가지 미들웨어를 사용하면 body를 파싱함

//__dirname이 ES Module에서는 기본적으로 제공되지 않음 → 직접 설정 필요
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//json파일이 없으면 [] 넣어서 생성하기
//? html과 연결된 script.js에서 fetch로 json파일을 받음
//? json파일의 유무를 / 경로에서 수행해야하지 않을까?
if(!fs.existsSync(path.join(__dirname, "data.json"))) {
    fs.writeFileSync(path.join(__dirname, "data.json"), "[]")
}

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname,  "index.html"))
})


app.get('/data', function(req,res) {
    res.sendFile(path.join(__dirname, "data.json"))
})

app.get('/style.css',function(req,res){
    res.sendFile(path.join(__dirname, "style.css"))
})

app.get('/cat.png',function(req,res){
    res.sendFile(path.join(__dirname, "cat.png"))
})

app.post("/write", function(req,res) {
    console.log("write 요청 받음")
    //입력 데이터 확인하기
    console.log('write',req.body)

    //json파일 데이터 가져오기
    //readFileSync로 파일을 읽음 : Buffer로 나오는 값을 toString으로 문자열로 변환
    let jsonData = fs.readFileSync(path.join(__dirname, "data.json")).toString()
    //JSON문자열을 객체(배열)로 변환
    let jsonArr = JSON.parse(jsonData)

    //입력 데이터 가져오기
    const data = req.body;

    //json파일에 데이터 추가하기
    jsonArr.push(data)

    //json파일에 데이터 저장하기
    fs.writeFileSync(path.join(__dirname, "data.json"), JSON.stringify(jsonArr))

    res.redirect("/")

})

//삭제 요청

app.post("/order", function(req,res) {
    console.log("delete 요청 받음")
    // console.log('delete',req.body)
    // console.log(req.body)

    // const {id} = req.body;

    // if (!id) {
    //     res.status(400).send("id가 없습니다.")
    //     return;
    // }
    // const filepath = path.join(__dirname, "data.json")

    // //json파일 데이터 가져오기
    // const jsonData = fs.readFileSync(filepath).toString();
    // const jsonArr = JSON.parse(jsonData);

    // // 삭제 후 새로운 데이터
    // const newJsonArr = jsonArr.filter((item) => item.id !== id)

    // fs.writeFileSync(filepath, JSON.stringify(newJsonArr, null, 2));
    // console.log("삭제 성공", newJsonArr)
    res.redirect("/")
});

app.listen(PORT, function() {
    console.log("http://localhost:3000/")
})