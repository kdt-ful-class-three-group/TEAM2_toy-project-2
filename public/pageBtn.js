import { displayData } from "./displayData.js";
import { pageState, makeNumBtn } from "./Pagination.js";

// 페이지 버튼 관리 모듈
const PageButtons = {
  elements: {
    prevButton: document.getElementById("prevBtn"),
    nextButton: document.getElementById("nextBtn")
  },
  
  /**
   * 페이지 버튼 초기화 및 이벤트 리스너 등록
   */
  init: function() {
    this.setupEventListeners();
  },
  
  /**
   * 이벤트 리스너 설정
   */
  setupEventListeners: function() {
    this.elements.prevButton.addEventListener("click", this.handlePrevClick.bind(this));
    this.elements.nextButton.addEventListener("click", this.handleNextClick.bind(this));
  },
  
  /**
   * 이전 페이지 버튼 클릭 핸들러
   */
  handlePrevClick: function() {
    if (pageState.currentPage > 1) {
      pageState.currentPage--;
      this.updatePageView();
    }
  },
  
  /**
   * 다음 페이지 버튼 클릭 핸들러
   */
  handleNextClick: function() {
    if (pageState.currentPage < pageState.totalPage) {
      pageState.currentPage++;
      this.updatePageView();
    }
  },
  
  /**
   * 페이지 뷰 업데이트
   */
  updatePageView: function() {
    displayData();
    makeNumBtn();
  }
};

// 페이지 버튼 초기화 함수
function pageBtn() {
  PageButtons.init();
}

export { pageBtn };
