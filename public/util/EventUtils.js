/**
 * 이벤트 처리 관련 유틸리티 함수들을 제공하는 모듈
 */

/**
 * 이벤트 리스너를 등록합니다.
 * @param {HTMLElement} element - 이벤트를 등록할 DOM 요소
 * @param {string} eventType - 이벤트 타입 (예: 'click', 'input')
 * @param {Function} handler - 이벤트 핸들러 함수
 * @param {Object} [options={}] - 이벤트 리스너 옵션
 */
function addEvent(element, eventType, handler, options = {}) {
  if (!element) return;
  
  element.addEventListener(eventType, handler, options);
}

/**
 * 이벤트 리스너를 제거합니다.
 * @param {HTMLElement} element - 이벤트를 제거할 DOM 요소
 * @param {string} eventType - 이벤트 타입 (예: 'click', 'input')
 * @param {Function} handler - 이벤트 핸들러 함수
 * @param {Object} [options={}] - 이벤트 리스너 옵션
 */
function removeEvent(element, eventType, handler, options = {}) {
  if (!element) return;
  
  element.removeEventListener(eventType, handler, options);
}

/**
 * 디바운스 함수를 생성합니다.
 * 연속적인 함수 호출을 지연시켜 마지막 호출만 실행합니다.
 * @param {Function} func - 실행할 함수
 * @param {number} delay - 지연 시간 (밀리초)
 * @returns {Function} 디바운스된 함수
 */
function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    const context = this;
    
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

/**
 * 쓰로틀 함수를 생성합니다.
 * 일정 시간 간격으로 함수 호출을 제한합니다.
 * @param {Function} func - 실행할 함수
 * @param {number} limit - 제한 시간 (밀리초)
 * @returns {Function} 쓰로틀된 함수
 */
function throttle(func, limit) {
  let inThrottle;
  
  return function(...args) {
    const context = this;
    
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * 이벤트 위임을 처리합니다.
 * 부모 요소에 이벤트를 등록하고 특정 선택자에 해당하는 자식 요소에 대해서만 핸들러를 실행합니다.
 * @param {HTMLElement} element - 이벤트를 등록할 부모 DOM 요소
 * @param {string} eventType - 이벤트 타입 (예: 'click', 'input')
 * @param {string} selector - 대상 요소를 선택할 CSS 선택자
 * @param {Function} handler - 이벤트 핸들러 함수
 */
function delegate(element, eventType, selector, handler) {
  if (!element) return;
  
  element.addEventListener(eventType, function(event) {
    const targetElement = event.target.closest(selector);
    
    if (targetElement && element.contains(targetElement)) {
      handler.call(targetElement, event, targetElement);
    }
  });
}

/**
 * 여러 이벤트 리스너를 한 번에 등록합니다.
 * @param {HTMLElement} element - 이벤트를 등록할 DOM 요소
 * @param {Object} events - 이벤트 타입과 핸들러 맵 (예: {click: handleClick, input: handleInput})
 * @param {Object} [options={}] - 이벤트 리스너 옵션
 */
function addEvents(element, events, options = {}) {
  if (!element || !events) return;
  
  Object.entries(events).forEach(([eventType, handler]) => {
    element.addEventListener(eventType, handler, options);
  });
}

/**
 * 이벤트 핸들러에 컨텍스트를 바인딩합니다.
 * @param {Object} context - 바인딩할 컨텍스트 (this)
 * @param {Object} handlers - 핸들러 함수 맵
 * @returns {Object} 바인딩된 핸들러 함수 맵
 */
function bindHandlers(context, handlers) {
  const boundHandlers = {};
  
  Object.entries(handlers).forEach(([name, handler]) => {
    boundHandlers[name] = handler.bind(context);
  });
  
  return boundHandlers;
}

export {
  addEvent,
  removeEvent,
  debounce,
  throttle,
  delegate,
  addEvents,
  bindHandlers
}; 