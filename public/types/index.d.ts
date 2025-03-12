/**
 * 유틸리티 모듈 통합 내보내기
 * @module Utils
 */

import * as DOMUtils from './DOMUtils';
import * as APIService from './APIService';
import * as EventUtils from './EventUtils';
import * as ConfigManager from './ConfigManager';
import { AppConfig } from './ConfigManager';
import * as StorageUtils from './StorageUtils';

/**
 * DOM 조작 유틸리티
 */
export * as DOMUtils from './DOMUtils';

/**
 * API 호출 유틸리티
 */
export * as APIService from './APIService';

/**
 * 이벤트 처리 유틸리티
 */
export * as EventUtils from './EventUtils';

/**
 * 설정 관리 유틸리티
 */
export * as ConfigManager from './ConfigManager';

/**
 * 애플리케이션 설정
 */
export { CONFIG } from './ConfigManager';

/**
 * 로컬 스토리지 유틸리티
 */
export * as StorageUtils from './StorageUtils';

/**
 * 모든 유틸리티를 포함하는 객체
 */
declare const Utils: {
  /** DOM 조작 유틸리티 */
  DOM: typeof DOMUtils;
  /** API 호출 유틸리티 */
  API: typeof APIService;
  /** 이벤트 처리 유틸리티 */
  Event: typeof EventUtils;
  /** 설정 관리 유틸리티 */
  Config: typeof ConfigManager & { CONFIG: AppConfig };
  /** 로컬 스토리지 유틸리티 */
  Storage: typeof StorageUtils;
};

export default Utils; 