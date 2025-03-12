// export한 변수는 read only기 때문에 변경할 수 없음, 다른 함수에서 값을 변경하려면 객체로 감싸서 내보내야함
import { CONFIG } from "./util/ConfigManager.js";
import { get } from "./util/APIService.js";
import { createElement, clearElement, appendElement, setTextContent, setStyles } from "./util/DOMUtils.js";
import { addEvent } from "./util/EventUtils.js";

import { displayData } from "./displayData.js";
import { pageBtn } from "./pageBtn.js";

// 페이지네이션 상태 관리 객체
export const pageState = {
  dataArray: [],
  currentPage: 1,
  totalPage: 0,
  limit: CONFIG.defaultPageLimit,
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
    get("data")
      .then(data => {
        pageState.dataArray = data;
        pageState.totalPage = Math.ceil(pageState.dataArray.length / pageState.limit);
        displayData();
        this.makeNumBtn();
      })
      .catch(error => {
        console.error("데이터 불러오기 실패:", error);
      });
  },
  
  /**
   * 목록에 따라 숫자 버튼 생성 + 클릭이벤트 적용하는 함수
   * 해당 페이지의 숫자버튼 스타일 지정
   */
  makeNumBtn: function() {
    const div = document.querySelector("section > div");
    clearElement(div); // 초기화
    
    for (let i = 0; i < pageState.totalPage; i++) {
      const pageNumber = i + 1;
      const numBtn = createElement("button", {}, pageNumber.toString());
      appendElement(div, numBtn);
      
      // 클릭 이벤트 추가
      addEvent(numBtn, "click", () => {
        pageState.currentPage = pageNumber;
        displayData();
        this.makeNumBtn();
      });
      
      // 현재 페이지 버튼 스타일 적용
      if (pageState.currentPage === pageNumber) {
        setStyles(numBtn, CONFIG.styles.activeButton);
      }
    }
  }
};

// 페이지네이션 초기화
Pagination.init();

// 외부에서 사용할 함수 내보내기
export const makeNumBtn = Pagination.makeNumBtn.bind(Pagination);
