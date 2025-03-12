import { closeModal, readModal } from "./modals.js";

// 애플리케이션 설정 및 상수
const CONFIG = {
  port: 3000,
  maxContentLength: 450,
  autoSaveDelay: 2000
};

// AJAX 요청 관리
const API = {
  baseUrl: `http://localhost:${CONFIG.port}`,
  
  // 삭제 요청
  deleteItem: function(id) {
    return fetch(`${this.baseUrl}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: String(id) }),
    });
  },
  
  // 저장 요청 (필요시 구현)
  saveItem: function(data) {
    return fetch(`${this.baseUrl}/write`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  
  // 데이터 조회 요청 (필요시 구현)
  getData: function() {
    return fetch(`${this.baseUrl}/data`).then(res => res.json());
  }
};

// DOM 요소 관리
const DOM = {
  elements: {
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
  },
  
  classes: {
    hidden: "display-none"
  },
  
  // DOM 조작 헬퍼 메서드
  show: function(element) {
    element.classList.remove(this.classes.hidden);
  },
  
  hide: function(element) {
    element.classList.add(this.classes.hidden);
  },
  
  toggle: function(element) {
    element.classList.toggle(this.classes.hidden);
  }
};

// 기능별 모듈
const App = {
  timeToSave: null,
  
  init: function() {
    // 초기 설정
    DOM.hide(DOM.elements.pText);
    
    // 이벤트 리스너 등록
    this.setupEventListeners();
    
    // 모달 초기화
    readModal();
    closeModal();
  },
  
  setupEventListeners: function() {
    // 텍스트 입력 이벤트
    DOM.elements.textarea.addEventListener("input", this.handleTextareaInput.bind(this));
    
    // 글쓰기 버튼 이벤트
    DOM.elements.writeBtn.addEventListener("click", this.handleWriteBtnClick);
    
    // 저장 버튼 이벤트
    DOM.elements.saveButton.addEventListener("click", this.handleSaveButtonClick);
    
    // 삭제 버튼 이벤트
    DOM.elements.deleteBtn.addEventListener("click", this.handleDeleteBtnClick);
  },
  
  handleTextareaInput: function() {
    const content = DOM.elements.textarea.value;
    
    // 이전 타이머 제거
    clearTimeout(this.timeToSave);
    
    // 입력 중일 때 저장 메시지 숨기기
    DOM.hide(DOM.elements.pText);
    
    // 글자 수 업데이트
    this.updateCharacterCount(content);
    
    // 자동 저장 타이머 설정
    this.timeToSave = setTimeout(() => {
      console.log("저장해야합니다. 5초 지났습니다.");
      localStorage.setItem("content", content);
      
      // 저장 메시지 표시
      DOM.show(DOM.elements.pText);
    }, CONFIG.autoSaveDelay);
  },
  
  updateCharacterCount: function(content) {
    DOM.elements.countLength.innerText = content.length;
    
    if (content.length > CONFIG.maxContentLength) {
      DOM.elements.countLength.style.color = "red";
    } else {
      DOM.elements.countLength.style.color = "#aaa";
    }
  },
  
  handleWriteBtnClick: function() {
    const modal = DOM.elements.readModal;
    if (modal.style.display === "none" || modal.style.display === "") {
      DOM.toggle(DOM.elements.form);
    } else {
      alert("상세보기 중 글 작성이 안됩니다.");
    }
  },
  
  handleSaveButtonClick: function(e) {
    const contentLength = DOM.elements.contentInput.value.length;
    
    if (contentLength <= CONFIG.maxContentLength) {
      if (DOM.elements.titleInput.value && DOM.elements.contentInput.value) {
        alert("저장되었습니다.");
        // 필요시 API.saveItem() 호출 가능
      }
    } else {
      e.preventDefault();
      alert(`${CONFIG.maxContentLength}자까지 작성이 가능합니다.`);
    }
  },
  
  handleDeleteBtnClick: function() {
    const modal = DOM.elements.readModal;
    const modalContent = modal.querySelector("div");
    const id = modalContent.getAttribute("id");
    
    if (id && confirm("삭제하시겠습니까?")) {
      console.log("삭제 요청할 id:", id);
      
      API.deleteItem(id)
        .then((response) => {
          if (response.status === 200) {
            alert("삭제되었습니다.");
            closeModal();
            // 삭제 후 전체 reload하여 다시 불러옴
            window.location.reload();
          }
        })
        .catch((error) => console.error("리로드 안됨", error));
    }
  }
};

// 애플리케이션 초기화
App.init();
