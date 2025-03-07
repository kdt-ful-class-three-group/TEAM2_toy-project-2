
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


// json파일불러오기

let datalist = null
fetch("/data")
    .then(response => response.json())
    .then(data =>  {

      data.forEach(i => {
        // div만들기
        let div = document.createElement("div")
        div.textContent = i.title;
        div.setAttribute("style", "cursor:pointer");
        div.addEventListener("click", function() {
          readModal(i.title, i.content)
        })
        document.getElementById('listDiv').appendChild(div)

      })

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