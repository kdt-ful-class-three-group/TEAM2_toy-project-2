/**
 * 유틸리티 모듈 통합 내보내기
 */

// DOM 조작 유틸리티
export * as DOMUtils from './DOMUtils.js';

// API 호출 유틸리티
export * as APIService from './APIService.js';

// 이벤트 처리 유틸리티
export * as EventUtils from './EventUtils.js';

// 설정 관리 유틸리티
export * as ConfigManager from './ConfigManager.js';
export { CONFIG } from './ConfigManager.js';

// 로컬 스토리지 유틸리티
export * as StorageUtils from './StorageUtils.js';

/**
 * 모든 유틸리티를 하나의 객체로 내보냅니다.
 */
import * as DOMUtils from './DOMUtils.js';
import * as APIService from './APIService.js';
import * as EventUtils from './EventUtils.js';
import * as ConfigManager from './ConfigManager.js';
import { CONFIG } from './ConfigManager.js';
import * as StorageUtils from './StorageUtils.js';

const Utils = {
  DOM: DOMUtils,
  API: APIService,
  Event: EventUtils,
  Config: {
    ...ConfigManager,
    CONFIG
  },
  Storage: StorageUtils
};

export default Utils; 