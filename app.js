import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static("public"));
//!express는 POST요청의 body(요청)을 파싱하지 않음
// URL 인코딩된 본문 데이터를 파싱함
//extend:false => querystring 라이브러리를 사용해서 간단한 문자열, 배열형태의 데이터만 파싱
//extend:true => qs 라이브러리를 사용해서 복잡한 객체형태의 데이터도 파싱

app.use(express.urlencoded({ extended: true }));
//JSON 형태의 본문 데이터를 파싱함
//*이 두가지 미들웨어를 사용하면 body를 파싱함

//__dirname이 ES Module에서는 기본적으로 제공되지 않음 → 직접 설정 필요
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//json파일이 없으면 [] 넣어서 생성하기
//? html과 연결된 script.js에서 fetch로 json파일을 받음
//? json파일의 유무를 / 경로에서 수행해야하지 않을까?
if (!fs.existsSync(path.join(__dirname, "data.json"))) {
  fs.writeFileSync(path.join(__dirname, "data.json"), "[]");
}

// 정적 파일 경로를 객체 리터럴로 정의
const staticFiles = {
  "/": "index.html",
  "/data": "data.json",
  "/style.css": "style.css",
  "/cat.png": "cat.png"
};

// 반복문을 통해 각 경로에 대한 라우트 핸들러 등록
Object.entries(staticFiles).forEach(([route, file]) => {
  app.get(route, function(req, res) {
    res.sendFile(path.join(__dirname, file));
  });
});

// 데이터 파일 관련 헬퍼 함수
const dataHelper = {
  getFilePath: () => path.join(__dirname, "data.json"),
  
  readData: () => {
    const jsonData = fs.readFileSync(dataHelper.getFilePath()).toString();
    return JSON.parse(jsonData);
  },
  
  writeData: (data) => {
    fs.writeFileSync(dataHelper.getFilePath(), JSON.stringify(data, null, 2));
    return data;
  }
};

// POST 요청 처리를 위한 고차함수
const postHandler = (handler) => {
  return (req, res) => {
    try {
      handler(req, res, dataHelper);
    } catch (error) {
      console.error("요청 처리 실패:", error);
      res.status(500).send("요청 처리 실패");
    } finally {
      if (!res.headersSent) {
        res.redirect("/");
      }
    }
  };
};

// 글 작성 핸들러
app.post("/write", postHandler((req, res, helper) => {
  console.log("write 요청 받음");
  console.log(req.body);
  console.log("content", req.body.content.length);
  
  // 데이터 읽기
  const jsonArr = helper.readData();
  
  // 입력 데이터 가져오기
  const data = req.body;
  console.log("ID 추가된 데이터:", data);
  
  // 데이터 추가 및 저장
  jsonArr.push(data);
  helper.writeData(jsonArr);
  
  console.log("저장된 데이터", jsonArr);
}));

// 삭제 핸들러
app.post("/delete", postHandler((req, res, helper) => {
  console.log("delete 요청 받음");
  console.log("req.body:", req.body);
  
  const { id } = req.body;
  if (!id) {
    console.log("id가 없습니다.");
    throw new Error("ID가 없습니다");
  }
  
  // 데이터 읽기
  const jsonArr = helper.readData();
  console.log("삭제 전 데이터:", jsonArr);
  
  // 데이터 필터링 및 저장
  const newJsonArr = jsonArr.filter((item, index) => String(index) !== String(id));
  console.log("삭제 후 데이터:", newJsonArr);
  
  // 데이터 저장
  helper.writeData(newJsonArr);
  
  // 저장 확인
  const updatedData = helper.readData();
  console.log("파일 저장 후 확인:", updatedData);
}));

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
