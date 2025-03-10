import {modals} from "./modals.js";

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

  //5초동안 반응 없을 때 로직
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
  const modal = document.getElementById('readModal')
  if(modal.style.display==='none' || modal.style.display===''){
    const form = document.getElementsByTagName('form')[0]
    form.classList.toggle("display-none")
  } else {
    alert('상세보기 중 글 작성이 안됩니다.')
  }
})



// 모달 함수
modals()


let titleValue = document.getElementById('title');
let contentValue = document.getElementById('content');
document.getElementById("saveButton").addEventListener('click', function() {
  if(titleValue.value && contentValue.value){
    alert("저장되었습니다.")
  }
})


//삭제
const delBtn = document.getElementById('delete')

delBtn.addEventListener("click", (event) => {

  if (delBtn) {
    delBtn.addEventListener("click", function() {
      if (confirm("삭제하시겠습니까?")) {

      }
    });
  }
})
