
const texterea = document.getElementById("content");
const port = 3000

let timeToSave;
// p태그를 가져옴
let pText = document.getElementById('saveText')
// p태그에 display-none class 추가
pText.classList.add("display-none")
// content Input에 작성 안할시 타이머 설정
texterea.addEventListener("input", function(){
  const content = texterea.value;
  console.log(content);
  clearTimeout(timeToSave); // 이전 타이머 제거
  // 입력중일때 p태그에 display-none class 추가(입력중일 때 p태그 안 보임)
  pText.classList.add("display-none")



  timeToSave = setTimeout(() => {
    console.log("저장해야합니다. 5초 지났습니다.");
    localStorage.setItem("content", content);

    // 5초 후에 p태그 보임
    pText.classList.remove("display-none")
  }, 5000);
});

// 글쓰기 버튼 클릭 시 input 생성
const writeBtn = document.getElementById("writeBtn")
writeBtn.addEventListener('click', function() {
  const form = document.getElementsByTagName('form')[0]
  form.classList.toggle("display-none")
})

// json파일불러오기
let datalist = null
fetch('./dataprac.json')
.then(response => response.json())
.then(data =>  {

  data.forEach(i => {
    // div만들기
    let div = document.createElement("div")
    div.textContent = i.title
    document.getElementById('listDiv').appendChild(div)
    
  })
  
  console.log(data)
})

