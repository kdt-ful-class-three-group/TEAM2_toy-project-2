// 모달 관리 모듈
const Modal = {
  elements: {
    modalBackground: document.querySelector(".modal"),
    readModal: document.getElementById("readModal"),
    modalContent: document.getElementById("readModal").querySelector("div")
  },
  
  /**
   * 모달 초기화
   */
  init: function() {
    // 필요한 초기화 로직이 있다면 여기에 추가
  },
  
  /**
   * 모달 표시 - 상세보기
   * @param {string} title - 제목에 해당하는 문자열
   * @param {string} content - 내용에 해당하는 문자열
   * @param {string} id - 데이터 식별자
   */
  show: function(title, content, id) {
    // ID 설정
    this.elements.modalContent.setAttribute("id", id);
    
    // 내용 설정
    this.elements.modalContent.innerHTML = `
      <h2>${title}</h2>
      <p>${content}</p>
    `;
    
    // 모달 표시
    this.elements.modalBackground.style.display = "block";
    this.elements.readModal.style.display = "block";
  },
  
  /**
   * 모달 닫기
   */
  close: function() {
    this.elements.modalBackground.style.display = "none";
    this.elements.readModal.style.display = "none";
  }
};

/**
 * 모달창의 내용 구성하고 목록 클릭했을 때 보여주는 함수
 * @param {string} title - 제목에 해당하는 문자열
 * @param {string} content - 내용에 해당하는 문자열
 * @param {string} id - 데이터 식별자
 */
function readModal(title, content, id) {
  Modal.show(title, content, id);
}

/**
 * 모달창을 닫는 함수
 */
function closeModal() {
  Modal.close();
}

// 전역 객체에 함수 등록 (기존 코드와의 호환성 유지)
window.readModal = readModal;
window.closeModal = closeModal;

// 모듈 초기화
Modal.init();

// 함수 내보내기
export { readModal, closeModal };
