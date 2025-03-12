/**
 * 이벤트 관련 유틸리티 함수들을 제공하는 모듈
 * @module EventUtils
 */

/**
 * 이벤트 핸들러 타입
 */
export type EventHandler<T extends Event = Event> = (event: T) => void;

/**
 * 이벤트 구독 옵션
 */
export interface EventSubscriptionOptions {
  /** 한 번만 실행 여부 */
  once?: boolean;
  /** 캡처 단계에서 실행 여부 */
  capture?: boolean;
  /** 수동 이벤트 처리 여부 */
  passive?: boolean;
}

/**
 * 이벤트 구독 정보
 */
export interface EventSubscription {
  /** 이벤트 타입 */
  eventType: string;
  /** 이벤트 핸들러 */
  handler: EventHandler;
  /** 이벤트 옵션 */
  options?: EventSubscriptionOptions | boolean;
  /** 구독 해제 함수 */
  unsubscribe: () => void;
}

/**
 * 이벤트 버스 인터페이스
 */
export interface EventBus {
  /** 이벤트 구독 */
  subscribe: (eventType: string, handler: EventHandler, options?: EventSubscriptionOptions) => EventSubscription;
  /** 이벤트 발행 */
  publish: (eventType: string, data?: any) => void;
  /** 모든 구독 해제 */
  unsubscribeAll: (eventType?: string) => void;
}

/**
 * 요소에 이벤트 리스너를 추가합니다.
 * @param {Element|Window|Document} element - 대상 요소
 * @param {string} eventType - 이벤트 타입
 * @param {EventHandler} handler - 이벤트 핸들러
 * @param {boolean|AddEventListenerOptions} [options] - 이벤트 리스너 옵션
 * @returns {() => void} 이벤트 리스너 제거 함수
 */
export function addEvent<T extends Event = Event>(
  element: Element | Window | Document,
  eventType: string,
  handler: EventHandler<T>,
  options?: boolean | AddEventListenerOptions
): () => void;

/**
 * 요소에서 이벤트 리스너를 제거합니다.
 * @param {Element|Window|Document} element - 대상 요소
 * @param {string} eventType - 이벤트 타입
 * @param {EventHandler} handler - 이벤트 핸들러
 * @param {boolean|EventListenerOptions} [options] - 이벤트 리스너 옵션
 */
export function removeEvent<T extends Event = Event>(
  element: Element | Window | Document,
  eventType: string,
  handler: EventHandler<T>,
  options?: boolean | EventListenerOptions
): void;

/**
 * 이벤트 위임을 설정합니다.
 * @param {Element} element - 이벤트를 위임할 부모 요소
 * @param {string} eventType - 이벤트 타입
 * @param {string} selector - 대상 요소 선택자
 * @param {EventHandler} handler - 이벤트 핸들러
 * @param {boolean|AddEventListenerOptions} [options] - 이벤트 리스너 옵션
 * @returns {() => void} 이벤트 위임 제거 함수
 */
export function delegate<T extends Event = Event>(
  element: Element,
  eventType: string,
  selector: string,
  handler: EventHandler<T>,
  options?: boolean | AddEventListenerOptions
): () => void;

/**
 * 이벤트 버스를 생성합니다.
 * @returns {EventBus} 이벤트 버스 인스턴스
 */
export function createEventBus(): EventBus;

/**
 * 디바운스된 함수를 생성합니다.
 * @param {Function} func - 원본 함수
 * @param {number} wait - 대기 시간 (밀리초)
 * @param {boolean} [immediate=false] - 즉시 실행 여부
 * @returns {Function} 디바운스된 함수
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate?: boolean
): (...args: Parameters<T>) => void;

/**
 * 쓰로틀된 함수를 생성합니다.
 * @param {Function} func - 원본 함수
 * @param {number} limit - 제한 시간 (밀리초)
 * @returns {Function} 쓰로틀된 함수
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => ReturnType<T> | undefined;

/**
 * 기본 이벤트 버스 인스턴스
 */
export const eventBus: EventBus; 