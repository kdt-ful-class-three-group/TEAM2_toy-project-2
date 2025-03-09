
let dataArray = []
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
    let start = (currentPage - 1 ) * limit
    let end = start + limit
    let showingData = dataArray.slice(start, end) // 현재 페이지에서 보여줄 리스트 데이터

    document.getElementById('listDiv').innerHTML = "";

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



// [ ] 총 페이지 개수
let all = Math.ceil(dataArray.length / 5)


// [ ] 화면에 보여질 페이지 그룹
let show = Math.ceil(currentPage / 5)


// [ ] 첫번째 페이지 번호



// [ ] 마지막 페이지 번호