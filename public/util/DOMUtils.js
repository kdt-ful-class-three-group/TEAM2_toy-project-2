/**
 * DOM 조작 관련 유틸리티 함수들을 제공하는 모듈
 */

// CSS 클래스 관련 상수
const CSS_CLASSES = {
  HIDDEN: 'display-none'
};

/**
 * 요소를 표시합니다.
 * @param {HTMLElement} element - 표시할 DOM 요소
 * @param {string} [displayType='block'] - 표시 타입 (block, flex 등)
 */
function showElement(element, displayType = 'block') {
  if (!element) return;
  
  if (element.classList.contains(CSS_CLASSES.HIDDEN)) {
    element.classList.remove(CSS_CLASSES.HIDDEN);
  } else {
    element.style.display = displayType;
  }
}

/**
 * 요소를 숨깁니다.
 * @param {HTMLElement} element - 숨길 DOM 요소
 */
function hideElement(element) {
  if (!element) return;
  
  element.classList.add(CSS_CLASSES.HIDDEN);
}

/**
 * 요소의 표시 상태를 토글합니다.
 * @param {HTMLElement} element - 토글할 DOM 요소
 */
function toggleElement(element) {
  if (!element) return;
  
  element.classList.toggle(CSS_CLASSES.HIDDEN);
}

/**
 * 요소의 내용을 비웁니다.
 * @param {HTMLElement} element - 내용을 비울 DOM 요소
 */
function clearElement(element) {
  if (!element) return;
  
  element.innerHTML = '';
}

/**
 * 요소에 텍스트 내용을 설정합니다.
 * @param {HTMLElement} element - 내용을 설정할 DOM 요소
 * @param {string} text - 설정할 텍스트
 */
function setTextContent(element, text) {
  if (!element) return;
  
  element.textContent = text;
}

/**
 * 요소에 HTML 내용을 설정합니다.
 * @param {HTMLElement} element - 내용을 설정할 DOM 요소
 * @param {string} html - 설정할 HTML
 */
function setHtmlContent(element, html) {
  if (!element) return;
  
  element.innerHTML = html;
}

/**
 * 요소에 속성을 설정합니다.
 * @param {HTMLElement} element - 속성을 설정할 DOM 요소
 * @param {string} name - 속성 이름
 * @param {string} value - 속성 값
 */
function setAttribute(element, name, value) {
  if (!element) return;
  
  element.setAttribute(name, value);
}

/**
 * 요소에 스타일을 설정합니다.
 * @param {HTMLElement} element - 스타일을 설정할 DOM 요소
 * @param {Object} styles - 설정할 스타일 객체 (예: {color: 'red', fontSize: '12px'})
 */
function setStyles(element, styles) {
  if (!element || !styles) return;
  
  Object.entries(styles).forEach(([property, value]) => {
    element.style[property] = value;
  });
}

/**
 * 새로운 요소를 생성합니다.
 * @param {string} tagName - 생성할 요소의 태그 이름
 * @param {Object} [attributes={}] - 설정할 속성 객체
 * @param {string} [textContent=''] - 설정할 텍스트 내용
 * @param {Object} [styles={}] - 설정할 스타일 객체
 * @returns {HTMLElement} 생성된 요소
 */
function createElement(tagName, attributes = {}, textContent = '', styles = {}) {
  const element = document.createElement(tagName);
  
  // 속성 설정
  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
  
  // 텍스트 내용 설정
  if (textContent) {
    element.textContent = textContent;
  }
  
  // 스타일 설정
  setStyles(element, styles);
  
  return element;
}

/**
 * 부모 요소에 자식 요소를 추가합니다.
 * @param {HTMLElement} parent - 부모 요소
 * @param {HTMLElement} child - 자식 요소
 */
function appendElement(parent, child) {
  if (!parent || !child) return;
  
  parent.appendChild(child);
}

export {
  CSS_CLASSES,
  showElement,
  hideElement,
  toggleElement,
  clearElement,
  setTextContent,
  setHtmlContent,
  setAttribute,
  setStyles,
  createElement,
  appendElement
}; 