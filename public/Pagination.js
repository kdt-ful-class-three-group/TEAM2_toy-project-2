// export한 변수는 read only기 때문에 변경할 수 없음, 다른 함수에서 값을 변경하려면 객체로 감싸서 내보내야함

export let pageState = {
    dataArray: [],
    currentPage: 1,
    totalPage: 0,
    limit: 5
};
import {displayData} from "./displayData.js";
import { pageBtn} from "./pageBtn.js";


fetch("/data")// fs는 서버에서만 사용가능하기 때문에 브라우저에서는 fetch를 써서 데이터를 받아와야 함!
    .then(response => response.json())
    .then(data => {
        pageState.dataArray = data;
        pageState.totalPage = Math.ceil(pageState.dataArray.length / pageState.limit);
        displayData();
        makeNumBtn()
    })
    .catch(error => console.error("데이터 불러오기 실패:", error));


 displayData();



 // 페이지 이동 버튼
pageBtn()


// [ ] 페이지 이동.. 다음페이지 이전페이지,,
export function makeNumBtn (){
    let div = document.querySelector('section > div');
    div.innerHTML = ""; // 초기화
    for (let i = 0; i < pageState.totalPage; i++){
        let NumBtn = document.createElement('button')
        NumBtn.innerText = i + 1
        div.appendChild(NumBtn)

        NumBtn.addEventListener('click', function() {
            pageState.currentPage = i + 1
            displayData()
            makeNumBtn()
        })

        if (pageState.currentPage === i + 1){
            NumBtn.style.fontWeight = "bold"
            NumBtn.style.backgroundColor = "skyblue"
        }
    }
}



