/**
 * 유틸리티 모듈 사용 예시
 */
import Utils from './index.js';
import { CONFIG } from './ConfigManager.js';
import { todoApiService } from './APIService.js';
import { debounce } from './EventUtils.js';
import { saveToStorage, loadFromStorage } from './StorageUtils.js';
import { showElement, hideElement, toggleElement, createElement } from './DOMUtils.js';

// DOM 요소 관리
const elements = {
  textarea: document.getElementById("content"),
  pText: document.getElementById("saveText"),
  countLength: document.getElementsByTagName("span")[0],
  writeBtn: document.getElementById("writeBtn"),
  form: document.getElementsByTagName("form")[0],
  titleInput: document.getElementById("title"),
  contentInput: document.getElementById("content"),
  saveButton: document.getElementById("saveButton"),
  deleteBtn: document.getElementById("delete"),
  readModal: document.getElementById("readModal")
};

// 기능별 모듈
const App = {
  timeToSave: null,
  
  init: function() {
    // 초기 설정
    hideElement(elements.pText);
    
    // 이벤트 리스너 등록
    this.setupEventListeners();
    
    // 모달 초기화
    this.initializeModal();
  },
  
  initializeModal: function() {
    // 모달 초기화 로직
  },
  
  setupEventListeners: function() {
    // 텍스트 입력 이벤트 - 디바운스 적용
    elements.textarea.addEventListener("input", debounce(this.handleTextareaInput.bind(this), CONFIG.autoSaveDelay / 2));
    
    // 글쓰기 버튼 이벤트
    elements.writeBtn.addEventListener("click", this.handleWriteBtnClick);
    
    // 저장 버튼 이벤트
    elements.saveButton.addEventListener("click", this.handleSaveButtonClick);
    
    // 삭제 버튼 이벤트
    elements.deleteBtn.addEventListener("click", this.handleDeleteBtnClick.bind(this));
  },
  
  handleTextareaInput: function() {
    const content = elements.textarea.value;
    
    // 이전 타이머 제거
    clearTimeout(this.timeToSave);
    
    // 입력 중일 때 저장 메시지 숨기기
    hideElement(elements.pText);
    
    // 글자 수 업데이트
    this.updateCharacterCount(content);
    
    // 자동 저장 타이머 설정
    this.timeToSave = setTimeout(() => {
      console.log("저장해야합니다. 5초 지났습니다.");
      saveToStorage("content", content);
      
      // 저장 메시지 표시
      showElement(elements.pText);
    }, CONFIG.autoSaveDelay);
  },
  
  updateCharacterCount: function(content) {
    elements.countLength.innerText = content.length;
    
    if (content.length > CONFIG.maxContentLength) {
      elements.countLength.style.color = "red";
    } else {
      elements.countLength.style.color = "#aaa";
    }
  },
  
  handleWriteBtnClick: function() {
    const modal = elements.readModal;
    if (modal.style.display === "none" || modal.style.display === "") {
      toggleElement(elements.form);
    } else {
      alert("상세보기 중 글 작성이 안됩니다.");
    }
  },
  
  handleSaveButtonClick: function(e) {
    const contentLength = elements.contentInput.value.length;
    
    if (contentLength <= CONFIG.maxContentLength) {
      if (elements.titleInput.value && elements.contentInput.value) {
        alert("저장되었습니다.");
        
        // API 서비스를 사용하여 데이터 저장
        const data = {
          title: elements.titleInput.value,
          content: elements.contentInput.value
        };
        
        todoApiService.saveItem(data)
          .then(() => {
            console.log('데이터 저장 성공');
          })
          .catch(error => {
            console.error('데이터 저장 실패:', error);
          });
      }
    } else {
      e.preventDefault();
      alert(`${CONFIG.maxContentLength}자까지 작성이 가능합니다.`);
    }
  },
  
  handleDeleteBtnClick: function() {
    const modal = elements.readModal;
    const modalContent = modal.querySelector("div");
    const id = modalContent.getAttribute("id");
    
    if (id && confirm("삭제하시겠습니까?")) {
      console.log("삭제 요청할 id:", id);
      
      // API 서비스를 사용하여 데이터 삭제
      todoApiService.deleteItem({ id: String(id) })
        .then((response) => {
          if (response.status === 200) {
            alert("삭제되었습니다.");
            // 모달 닫기
            this.closeModal();
            // 삭제 후 전체 reload하여 다시 불러옴
            window.location.reload();
          }
        })
        .catch((error) => console.error("리로드 안됨", error));
    }
  },
  
  closeModal: function() {
    const modal = document.querySelector(".modal");
    const readModal = document.getElementById("readModal");
    
    modal.style.display = "none";
    readModal.style.display = "none";
  }
};

// 애플리케이션 초기화
document.addEventListener('DOMContentLoaded', () => {
  // 저장된 콘텐츠 불러오기
  const savedContent = loadFromStorage('content', '');
  if (savedContent) {
    elements.textarea.value = savedContent;
    App.updateCharacterCount(savedContent);
  }
  
  App.init();
}); 