
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
  const form = document.getElementsByTagName('form')[0]
  form.classList.toggle("display-none")
})

fetch("/data")
.then(response => response.json())
.then(data =>  {

  let listNumber = 5;

  //listNumber에 맞춰 div 만들기
  //만든 div에 modal과 관련한 내용 추가
  //cursor, click했을 때 readModal 실행
  for(let i =0; i<listNumber; i++){
    let makeList = document.createElement('div')
    document.getElementById('listDiv').appendChild(makeList)
    makeList.innerText = data[i].title
    makeList.setAttribute("style", "cursor:pointer");
    makeList.addEventListener('click',()=>{
      readModal(data[i].title,data[i].content)
    })
  }
  
  //5개씩 목록이 보일때 페이지 개수 + 버튼 생성
  let all = Math.ceil(data.length / listNumber)
  
  //페이지 개수에 따른 button 생성
  for(let i=0; i<all; i++){
    let numberBtn = document.createElement('button');
    numberBtn.innerText= `${i+1}`
    document.getElementById('btns').appendChild(numberBtn)

    //클릭이벤트
    numberBtn.addEventListener('click',()=>{
      //목록에 해당하는 div 가져옴
      let makeList = document.querySelectorAll('#listDiv > div')
      //버튼에 따라 보이는 정보 달라짐
      for(let k=0; k<listNumber; k++){
        //    k= 0 1 2 3 4
        //i=0    0 1 2 3 4
        //i=1    5 6 7 8 9
        //i=2   10 11 12 13 14 ...
        //=> 보이는 목록 개수를 5로 지정했을 때 목록에 해당하는 배열의 인덱스 = i*5 + k === i * listNumber + k
        makeList[k].textContent = ''
        if(data[k+listNumber*i]!==undefined){
          makeList[k].innerText= data[k+listNumber*i].title
          
        }
        //변경된 내용에 맞춰 modal이 나오도록 내용 추가
        //cursor, click했을 때 readModal 실행
        makeList[k].setAttribute("style", "cursor:pointer");
        makeList[k].addEventListener('click',()=>{
          readModal(data[k+listNumber*i].title, data[k+listNumber*i].content)
        })
      }
    })
  }
      //입력한 데이터 확인
      console.log(data)
    })





// modal elements script 작성 영역


// 상세보기 모달창, titile, content를 가져오기 위함
function readModal(title, content) {
    const modal = document.getElementById("readModal");
    const modalContent = modal.querySelector("div");

    modalContent.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
  `;

    modal.style.display = "block";
}

// 닫기 버튼 클릭 시 modal 닫기
function closeModal() {
    const readModal = document.getElementById("readModal");

    if (readModal) {
        readModal.style.display = "none";
    }

}
window.readModal = readModal;
window.closeModal = closeModal;

document.getElementById("saveButton").addEventListener('click', function() {
  alert("저장되었습니다.")
})