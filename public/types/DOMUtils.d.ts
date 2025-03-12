/**
 * DOM 조작 관련 유틸리티 함수들을 제공하는 모듈
 * @module DOMUtils
 */

/**
 * CSS 클래스 관련 상수
 */
export const CSS_CLASSES: {
  /** 요소를 숨기는 CSS 클래스 */
  HIDDEN: string;
};

/**
 * 요소를 표시합니다.
 * @param {HTMLElement} element - 표시할 DOM 요소
 * @param {string} [displayType='block'] - 표시 타입 (block, flex 등)
 */
export function showElement(element: HTMLElement, displayType?: string): void;

/**
 * 요소를 숨깁니다.
 * @param {HTMLElement} element - 숨길 DOM 요소
 */
export function hideElement(element: HTMLElement): void;

/**
 * 요소의 표시 상태를 토글합니다.
 * @param {HTMLElement} element - 토글할 DOM 요소
 */
export function toggleElement(element: HTMLElement): void;

/**
 * 요소의 내용을 비웁니다.
 * @param {HTMLElement} element - 내용을 비울 DOM 요소
 */
export function clearElement(element: HTMLElement): void;

/**
 * 요소에 텍스트 내용을 설정합니다.
 * @param {HTMLElement} element - 내용을 설정할 DOM 요소
 * @param {string} text - 설정할 텍스트
 */
export function setTextContent(element: HTMLElement, text: string): void;

/**
 * 요소에 HTML 내용을 설정합니다.
 * @param {HTMLElement} element - 내용을 설정할 DOM 요소
 * @param {string} html - 설정할 HTML
 */
export function setHtmlContent(element: HTMLElement, html: string): void;

/**
 * 요소에 속성을 설정합니다.
 * @param {HTMLElement} element - 속성을 설정할 DOM 요소
 * @param {string} name - 속성 이름
 * @param {string} value - 속성 값
 */
export function setAttribute(element: HTMLElement, name: string, value: string): void;

/**
 * 요소에 스타일을 설정합니다.
 * @param {HTMLElement} element - 스타일을 설정할 DOM 요소
 * @param {Object} styles - 설정할 스타일 객체 (예: {color: 'red', fontSize: '12px'})
 */
export function setStyles(element: HTMLElement, styles: Record<string, string>): void;

/**
 * 새로운 요소를 생성합니다.
 * @param {string} tagName - 생성할 요소의 태그 이름
 * @param {Object} [attributes={}] - 설정할 속성 객체
 * @param {string} [textContent=''] - 설정할 텍스트 내용
 * @param {Object} [styles={}] - 설정할 스타일 객체
 * @returns {HTMLElement} 생성된 요소
 */
export function createElement(
  tagName: string, 
  attributes?: Record<string, string>, 
  textContent?: string, 
  styles?: Record<string, string>
): HTMLElement;

/**
 * 부모 요소에 자식 요소를 추가합니다.
 * @param {HTMLElement} parent - 부모 요소
 * @param {HTMLElement} child - 자식 요소
 */
export function appendElement(parent: HTMLElement, child: HTMLElement): void; 