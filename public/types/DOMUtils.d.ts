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

/**
 * 이벤트 핸들러 타입
 */
export type EventHandler = (event: Event) => void;

/**
 * 요소 생성 옵션 인터페이스
 */
export interface CreateElementOptions {
  /** 요소 ID */
  id?: string;
  /** 요소 클래스 이름 (문자열 또는 배열) */
  className?: string | string[];
  /** 요소 텍스트 내용 */
  textContent?: string;
  /** 요소 HTML 내용 */
  innerHTML?: string;
  /** 요소 속성 */
  attributes?: Record<string, string>;
  /** 이벤트 리스너 */
  events?: Record<string, EventHandler>;
  /** 자식 요소 */
  children?: HTMLElement[];
  /** 데이터 속성 */
  dataset?: Record<string, string>;
  /** 스타일 속성 */
  style?: Partial<CSSStyleDeclaration>;
}

/**
 * 선택자로 단일 요소를 선택합니다.
 * @param {string} selector - CSS 선택자
 * @param {Element|Document} [parent=document] - 부모 요소
 * @returns {Element|null} 선택된 요소 또는 null
 */
export function qs(selector: string, parent?: Element | Document): Element | null;

/**
 * 선택자로 여러 요소를 선택합니다.
 * @param {string} selector - CSS 선택자
 * @param {Element|Document} [parent=document] - 부모 요소
 * @returns {Element[]} 선택된 요소 배열
 */
export function qsa(selector: string, parent?: Element | Document): Element[];

/**
 * ID로 요소를 선택합니다.
 * @param {string} id - 요소 ID
 * @returns {HTMLElement|null} 선택된 요소 또는 null
 */
export function getById(id: string): HTMLElement | null;

/**
 * 새로운 HTML 요소를 생성합니다.
 * @param {string} tagName - 요소 태그 이름
 * @param {CreateElementOptions} [options={}] - 요소 생성 옵션
 * @returns {HTMLElement} 생성된 HTML 요소
 */
export function createElement<T extends HTMLElement = HTMLElement>(
  tagName: string,
  options?: CreateElementOptions
): T;

/**
 * 요소에 이벤트 리스너를 추가합니다.
 * @param {Element|Window|Document} element - 대상 요소
 * @param {string} eventType - 이벤트 타입
 * @param {EventHandler} handler - 이벤트 핸들러
 * @param {boolean|AddEventListenerOptions} [options] - 이벤트 리스너 옵션
 */
export function addEvent(
  element: Element | Window | Document,
  eventType: string,
  handler: EventHandler,
  options?: boolean | AddEventListenerOptions
): void;

/**
 * 요소에서 이벤트 리스너를 제거합니다.
 * @param {Element|Window|Document} element - 대상 요소
 * @param {string} eventType - 이벤트 타입
 * @param {EventHandler} handler - 이벤트 핸들러
 * @param {boolean|EventListenerOptions} [options] - 이벤트 리스너 옵션
 */
export function removeEvent(
  element: Element | Window | Document,
  eventType: string,
  handler: EventHandler,
  options?: boolean | EventListenerOptions
): void;

/**
 * 요소의 클래스를 토글합니다.
 * @param {Element} element - 대상 요소
 * @param {string} className - 토글할 클래스 이름
 * @param {boolean} [force] - 강제 추가/제거 여부
 * @returns {boolean} 클래스가 추가되었는지 여부
 */
export function toggleClass(
  element: Element,
  className: string,
  force?: boolean
): boolean;

/**
 * 요소에 클래스를 추가합니다.
 * @param {Element} element - 대상 요소
 * @param {string|string[]} className - 추가할 클래스 이름 또는 배열
 */
export function addClass(element: Element, className: string | string[]): void;

/**
 * 요소에서 클래스를 제거합니다.
 * @param {Element} element - 대상 요소
 * @param {string|string[]} className - 제거할 클래스 이름 또는 배열
 */
export function removeClass(element: Element, className: string | string[]): void;

/**
 * 요소가 특정 클래스를 가지고 있는지 확인합니다.
 * @param {Element} element - 대상 요소
 * @param {string} className - 확인할 클래스 이름
 * @returns {boolean} 클래스 포함 여부
 */
export function hasClass(element: Element, className: string): boolean;

/**
 * 요소의 내용을 비웁니다.
 * @param {Element} element - 대상 요소
 */
export function empty(element: Element): void;

/**
 * 요소를 제거합니다.
 * @param {Element} element - 제거할 요소
 */
export function remove(element: Element): void;

/**
 * 부모 요소에 자식 요소를 추가합니다.
 * @param {Element} parent - 부모 요소
 * @param {Element|Element[]} children - 추가할 자식 요소 또는 배열
 */
export function append(parent: Element, children: Element | Element[]): void;

/**
 * HTML 문자열을 파싱하여 DOM 요소로 변환합니다.
 * @param {string} html - HTML 문자열
 * @returns {DocumentFragment} 파싱된 DOM 요소를 포함하는 DocumentFragment
 */
export function parseHTML(html: string): DocumentFragment;

/**
 * 요소의 스타일을 설정합니다.
 * @param {Element} element - 대상 요소
 * @param {Partial<CSSStyleDeclaration>} styles - 설정할 스타일 객체
 */
export function setStyles(element: Element, styles: Partial<CSSStyleDeclaration>): void;

/**
 * 요소의 속성을 설정합니다.
 * @param {Element} element - 대상 요소
 * @param {Record<string, string>} attributes - 설정할 속성 객체
 */
export function setAttributes(element: Element, attributes: Record<string, string>): void;

/**
 * 요소의 데이터 속성을 설정합니다.
 * @param {HTMLElement} element - 대상 요소
 * @param {Record<string, string>} dataset - 설정할 데이터 속성 객체
 */
export function setDataset(element: HTMLElement, dataset: Record<string, string>): void; 