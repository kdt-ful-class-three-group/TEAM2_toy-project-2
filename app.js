
const texterea = document.getElementById("content");

let timeToSave;

// content Input에 작성 안할시 타이머 설정
texterea.addEventListener("input", function(){
  const content = texterea.value;
  console.log(content);
  clearTimeout(timeToSave); // 이전 타이머 제거

  timeToSave = setTimeout(() => {
    console.log("저장해야합니다. 5초 지났습니다.");
    localStorage.setItem("content", content);
  }, 5000);
});




