import {pageState} from "./Pagination.js";
import {readModal} from "./modals.js";


function displayData (){
    let start = (pageState.currentPage - 1 ) * pageState.limit //시작페이지
    let end = start + pageState.limit // 끝페이지
    let showingData = pageState.dataArray.slice(start, end) // 현재 페이지에서 보여줄 리스트 데이터

    document.getElementById('listDiv').innerHTML = ""; // 리스트 초기화 쌓임 방지

// 이 기능이 script.js에 비슷하게 있는데 이 파일에서는 pagination 기능 구현에 필요하기 때문에 추가함
    showingData.forEach((item,index) =>{
        let div = document.createElement('div')
        div.textContent = item.title
        div.setAttribute("style", "cursor:pointer");
        div.setAttribute("id", `${index}`);

        div.addEventListener("click", function() {
            const form = document.getElementsByTagName('form')[0]
            if(form.classList.contains('display-none')){
                readModal(item.title, item.content, index);
            } else {
                alert('글 작성 중 상세보기가 안됩니다.')
            }

        })
        document.getElementById("listDiv").appendChild(div);

    })
}

export {displayData}

