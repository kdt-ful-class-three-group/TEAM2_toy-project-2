// export한 변수는 read only기 때문에 변경할 수 없음, 다른 함수에서 값을 변경하려면 객체로 감싸서 내보내야함

// 페이지네이션 상태 관리 객체
export const pageState = {
  dataArray: [],
  currentPage: 1,
  totalPage: 0,
  limit: 5,
};

import { displayData } from "./displayData.js";
import { pageBtn } from "./pageBtn.js";

// API 요청 관리
const API = {
  // 데이터 가져오기
  fetchData: function() {
    return fetch("/data")
      .then(response => response.json())
      .catch(error => {
        console.error("데이터 불러오기 실패:", error);
        return [];
      });
  }
};

// 페이지네이션 기능 모듈
const Pagination = {
  // 초기화
  init: function() {
    this.loadData();
    pageBtn();
  },
  
  // 데이터 로드 및 초기 설정
  loadData: function() {
    API.fetchData()
      .then(data => {
        pageState.dataArray = data;
        pageState.totalPage = Math.ceil(pageState.dataArray.length / pageState.limit);
        displayData();
        this.makeNumBtn();
      });
  },
  
  /**
   * 목록에 따라 숫자 버튼 생성 + 클릭이벤트 적용하는 함수
   * 해당 페이지의 숫자버튼 스타일 지정
   */
  makeNumBtn: function() {
    const div = document.querySelector("section > div");
    div.innerHTML = ""; // 초기화
    
    for (let i = 0; i < pageState.totalPage; i++) {
      const numBtn = document.createElement("button");
      numBtn.innerText = i + 1;
      div.appendChild(numBtn);
      
      // 클릭 이벤트 추가
      numBtn.addEventListener("click", () => {
        pageState.currentPage = i + 1;
        displayData();
        this.makeNumBtn();
      });
      
      // 현재 페이지 버튼 스타일 적용
      if (pageState.currentPage === i + 1) {
        numBtn.style.fontWeight = "bold";
        numBtn.style.backgroundColor = "#b4b4f1";
        numBtn.style.borderRadius = "5px";
      }
    }
  }
};

// 페이지네이션 초기화
Pagination.init();

// 외부에서 사용할 함수 내보내기
export const makeNumBtn = Pagination.makeNumBtn.bind(Pagination);
