
let dataArray = [] // 데이터를 받을 배열 선언
console.log(dataArray)
let currentPage = 1
let limit = 8 // 한번에 보여줄 페이지 개수
let totalPage = Math.ceil(dataArray.length / limit); // 전체페이지 개수를 정함

fetch("/data")// fs는 서버에서만 사용가능하기 때문에 브라우저에서는 fetch를 써서 데이터를 받아와야 함!
    .then(response => response.json())
    .then(data => {
        dataArray = data;
        totalPage = Math.ceil(dataArray.length / limit);
        displayData();
    })
    .catch(error => console.error("데이터 불러오기 실패:", error));


function displayData (){
    let start = (currentPage - 1 ) * limit //시작페이지
    let end = start + limit // 끝페이지
    let showingData = dataArray.slice(start, end) // 현재 페이지에서 보여줄 리스트 데이터

    document.getElementById('listDiv').innerHTML = ""; // 리스트 초기화 쌓임 방지

// 이 기능이 script.js에 비슷하게 있는데 이 파일에서는 pagination 기능 구현에 필요하기 때문에 추가함
    showingData.forEach(item =>{
        let div = document.createElement('div')
        div.textContent = item.title
        div.setAttribute("style", "cursor:pointer");
        div.addEventListener("click", function() {
            readModal(item.title, item.content);

    })
        document.getElementById("listDiv").appendChild(div);

    })
}



// [ ] 버튼 함수 만들기



// [ ] 페이지 이동.. 다음페이지 이전페이지,,


