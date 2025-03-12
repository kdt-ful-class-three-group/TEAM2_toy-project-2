/**
 * 애플리케이션 설정 관리 모듈
 * @module ConfigManager
 */

/**
 * 애플리케이션 환경 타입
 */
export type Environment = 'development' | 'production' | 'test';

/**
 * API 설정 인터페이스
 */
export interface ApiConfig {
  /** API 기본 URL */
  baseUrl: string;
  /** API 버전 */
  version: string;
  /** API 타임아웃 (밀리초) */
  timeout: number;
  /** API 엔드포인트 */
  endpoints: {
    /** 할 일 관련 엔드포인트 */
    todos: string;
    /** 사용자 관련 엔드포인트 */
    users: string;
    /** 인증 관련 엔드포인트 */
    auth: string;
  };
}

/**
 * 스토리지 설정 인터페이스
 */
export interface StorageConfig {
  /** 로컬 스토리지 키 접두사 */
  prefix: string;
  /** 할 일 목록 스토리지 키 */
  todoListKey: string;
  /** 사용자 정보 스토리지 키 */
  userInfoKey: string;
  /** 설정 스토리지 키 */
  settingsKey: string;
}

/**
 * UI 설정 인터페이스
 */
export interface UiConfig {
  /** 페이지당 항목 수 */
  itemsPerPage: number;
  /** 애니메이션 지속 시간 (밀리초) */
  animationDuration: number;
  /** 테마 */
  theme: 'light' | 'dark' | 'system';
  /** 폰트 크기 */
  fontSize: 'small' | 'medium' | 'large';
}

/**
 * 애플리케이션 설정 인터페이스
 */
export interface AppConfig {
  /** 애플리케이션 환경 */
  env: Environment;
  /** API 설정 */
  api: ApiConfig;
  /** 스토리지 설정 */
  storage: StorageConfig;
  /** UI 설정 */
  ui: UiConfig;
  /** 디버그 모드 활성화 여부 */
  debug: boolean;
  /** 로깅 레벨 */
  logLevel: 'error' | 'warn' | 'info' | 'debug';
}

/**
 * 설정 관리자 클래스
 */
declare class ConfigManager {
  /**
   * ConfigManager 인스턴스 생성
   * @param {Partial<AppConfig>} initialConfig - 초기 설정
   */
  constructor(initialConfig?: Partial<AppConfig>);

  /**
   * 현재 설정 가져오기
   * @returns {AppConfig} 현재 애플리케이션 설정
   */
  getConfig(): AppConfig;

  /**
   * 설정 업데이트
   * @param {Partial<AppConfig>} newConfig - 새로운 설정 (부분)
   * @returns {AppConfig} 업데이트된 설정
   */
  updateConfig(newConfig: Partial<AppConfig>): AppConfig;

  /**
   * 특정 설정 값 가져오기
   * @param {string} key - 설정 키 (점 표기법 지원, 예: 'api.baseUrl')
   * @param {any} [defaultValue] - 기본값 (설정이 없는 경우)
   * @returns {any} 설정 값
   */
  get<T = any>(key: string, defaultValue?: T): T;

  /**
   * 특정 설정 값 설정
   * @param {string} key - 설정 키 (점 표기법 지원, 예: 'api.baseUrl')
   * @param {any} value - 설정 값
   * @returns {AppConfig} 업데이트된 설정
   */
  set<T = any>(key: string, value: T): AppConfig;

  /**
   * 환경 설정
   * @param {Environment} env - 환경
   * @returns {AppConfig} 업데이트된 설정
   */
  setEnvironment(env: Environment): AppConfig;

  /**
   * 현재 환경 가져오기
   * @returns {Environment} 현재 환경
   */
  getEnvironment(): Environment;

  /**
   * 설정 초기화
   * @returns {AppConfig} 초기화된 설정
   */
  reset(): AppConfig;

  /**
   * 설정 저장
   * @returns {boolean} 저장 성공 여부
   */
  save(): boolean;

  /**
   * 저장된 설정 로드
   * @returns {AppConfig} 로드된 설정
   */
  load(): AppConfig;
}

/**
 * 기본 설정 관리자 인스턴스
 */
declare const configManager: ConfigManager;

/**
 * 기본 애플리케이션 설정
 */
export const defaultConfig: AppConfig;

export default configManager; 