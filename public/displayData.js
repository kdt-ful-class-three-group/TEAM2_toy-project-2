import {pageState} from "./Pagination.js";
import {readModal} from "./modals.js";

// 데이터 표시 관리 모듈
const DataDisplay = {
  elements: {
    listContainer: document.getElementById('listDiv'),
    form: document.getElementsByTagName('form')[0]
  },
  
  /**
   * 현재 페이지에 표시할 데이터 계산
   * @returns {Array} 현재 페이지에 표시할 데이터 배열
   */
  getCurrentPageData: function() {
    const start = (pageState.currentPage - 1) * pageState.limit;
    const end = start + pageState.limit;
    return pageState.dataArray.slice(start, end);
  },
  
  /**
   * 데이터 항목에 대한 DOM 요소 생성
   * @param {Object} item - 표시할 데이터 항목
   * @param {number} index - 데이터 항목의 인덱스
   * @returns {HTMLElement} 생성된 DOM 요소
   */
  createItemElement: function(item, index) {
    const div = document.createElement('div');
    div.textContent = item.title;
    div.setAttribute("style", "cursor:pointer");
    div.setAttribute("id", `${index}`);
    
    div.addEventListener("click", () => this.handleItemClick(item, index));
    
    return div;
  },
  
  /**
   * 데이터 항목 클릭 이벤트 핸들러
   * @param {Object} item - 클릭된 데이터 항목
   * @param {number} index - 데이터 항목의 인덱스
   */
  handleItemClick: function(item, index) {
    if (this.elements.form.classList.contains('display-none')) {
      readModal(item.title, item.content, index);
    } else {
      alert('글 작성 중 상세보기가 안됩니다.');
    }
  },
  
  /**
   * 데이터 목록 표시
   */
  render: function() {
    // 리스트 초기화 (쌓임 방지)
    this.elements.listContainer.innerHTML = "";
    
    // 현재 페이지 데이터 가져오기
    const showingData = this.getCurrentPageData();
    
    // 각 데이터 항목에 대한 요소 생성 및 추가
    showingData.forEach((item, index) => {
      const itemElement = this.createItemElement(item, index);
      this.elements.listContainer.appendChild(itemElement);
    });
  }
};

/**
 * @function displayData
 * pagination 기능 구현을 위한 함수
 * 목록 개수에 따라 <div>을 만들고, 클릭하면 modal창이 보이는 로직 작성
 * <form>가 보일 땐 modal창이 안뜨고 alert으로 경고함
 */
function displayData (){
    DataDisplay.render();
}

export {displayData}

