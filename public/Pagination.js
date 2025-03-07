const fs = require('fs')

let data = fs.readFileSync("data.json").toString()

let dataArray = JSON.parse(data)
console.log(dataArray)
let currentPage = 1


// [ ] 총 페이지 개수
let all = Math.ceil(dataArray.length / 5)

// 총 페이지 개수에 따른 숫자 버튼 생성
for(let i = 0; i < all; i++){
  let numberBtn = document.createElement('button')
  numberBtn.innerText = i + 1
  document.getElementById('btns').appendChild(numberBtn) 
}


// [ ] 화면에 보여질 페이지 그룹
let show = Math.ceil(currentPage / 5)


// [ ] 첫번째 페이지 번호

// [ ] 마지막 페이지 번호