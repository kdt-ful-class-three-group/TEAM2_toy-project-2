/**
 * 애플리케이션 설정 관리 모듈
 * @module ConfigManager
 */

/**
 * 버튼 스타일 인터페이스
 */
export interface ButtonStyle {
  /** 글꼴 두께 */
  fontWeight: string;
  /** 배경색 */
  backgroundColor: string;
  /** 테두리 반경 */
  borderRadius: string;
}

/**
 * CSS 클래스 설정 인터페이스
 */
export interface CssClasses {
  /** 숨김 클래스 */
  hidden: string;
  /** 활성화 클래스 */
  active: string;
  /** 선택됨 클래스 */
  selected: string;
  /** 오류 클래스 */
  error: string;
}

/**
 * 스타일 설정 인터페이스
 */
export interface Styles {
  /** 활성화된 버튼 스타일 */
  activeButton: ButtonStyle;
}

/**
 * 애플리케이션 설정 인터페이스
 */
export interface AppConfig {
  /** 서버 포트 */
  port: number;
  /** API 기본 URL */
  apiBaseUrl: string;
  /** 최대 콘텐츠 길이 */
  maxContentLength: number;
  /** 자동 저장 지연 시간 (밀리초) */
  autoSaveDelay: number;
  /** 기본 페이지 제한 */
  defaultPageLimit: number;
  /** CSS 클래스 설정 */
  cssClasses: CssClasses;
  /** 스타일 설정 */
  styles: Styles;
}

/**
 * 기본 애플리케이션 설정
 */
export const CONFIG: AppConfig;

/**
 * 환경별 설정을 로드합니다.
 * @param {string} env - 환경 이름 (예: 'development', 'production')
 * @returns {Object} 환경별 설정이 적용된 설정 객체
 */
export function loadEnvironmentConfig(env?: string): AppConfig;

/**
 * 사용자 정의 설정을 적용합니다.
 * @param {Object} customConfig - 사용자 정의 설정 객체
 * @returns {Object} 사용자 정의 설정이 적용된 설정 객체
 */
export function applyCustomConfig(customConfig?: Partial<AppConfig>): AppConfig;

/**
 * 로컬 스토리지에서 설정을 로드합니다.
 * @param {string} key - 설정 키
 * @param {*} defaultValue - 기본값
 * @returns {*} 로드된 설정 값
 */
export function loadConfigFromStorage<T>(key: string, defaultValue: T): T;

/**
 * 로컬 스토리지에 설정을 저장합니다.
 * @param {string} key - 설정 키
 * @param {*} value - 설정 값
 */
export function saveConfigToStorage<T>(key: string, value: T): void;

export default CONFIG; 