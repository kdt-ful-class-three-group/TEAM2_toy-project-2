export let dataArray = [] // 데이터를 받을 배열 선언

export let currentPage = 1
export let limit = 5 // 한번에 보여줄 페이지 개수
export let totalPage = Math.ceil(dataArray.length / limit); // 전체페이지 개수를 정함
import {displayData} from "./displayData.js";

fetch("/data")// fs는 서버에서만 사용가능하기 때문에 브라우저에서는 fetch를 써서 데이터를 받아와야 함!
    .then(response => response.json())
    .then(data => {
        dataArray = data;
        totalPage = Math.ceil(dataArray.length / limit);
        displayData();
        makeNumBtn()
    })
    .catch(error => console.error("데이터 불러오기 실패:", error));


 displayData();






// 이전페이지 함수
function prevBtn(){
    if(currentPage > 1 ){
        currentPage -- ;
        displayData();
    }
}


function nextBtn(){
    if(currentPage < totalPage){
        currentPage ++;
        displayData();
    }
}



// 버튼에 클릭이벤트 추가
document.getElementById("prevBtn").addEventListener("click", prevBtn)
document.getElementById("nextBtn").addEventListener("click", nextBtn)


// [ ] 페이지 이동.. 다음페이지 이전페이지,,
function makeNumBtn (){
    let div = document.querySelector('section > div');
    div.innerHTML = ""; // 초기화
    for (let i = 0; i < totalPage; i++){
        let NumBtn = document.createElement('button')
        NumBtn.innerText = i + 1
        div.appendChild(NumBtn)

        NumBtn.addEventListener('click', function() {
            currentPage = i + 1
            displayData()
            makeNumBtn()
        })

        if (currentPage === i + 1){
            NumBtn.style.fontWeight = "bold"
            NumBtn.style.backgroundColor = "skyblue"
        }
    }
}



