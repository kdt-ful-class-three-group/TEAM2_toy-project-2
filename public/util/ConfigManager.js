/**
 * 애플리케이션 설정 관리 모듈
 */

/**
 * 기본 애플리케이션 설정
 */
export const CONFIG = {
  // 서버 설정
  port: 3000,
  apiBaseUrl: `http://localhost:3000`,
  
  // 콘텐츠 설정
  maxContentLength: 450,
  
  // 타이머 설정
  autoSaveDelay: 2000,
  
  // 페이지네이션 설정
  defaultPageLimit: 5,
  
  // CSS 클래스 설정
  cssClasses: {
    hidden: 'display-none',
    active: 'active',
    selected: 'selected',
    error: 'error'
  },
  
  // 스타일 설정
  styles: {
    activeButton: {
      fontWeight: 'bold',
      backgroundColor: '#b4b4f1',
      borderRadius: '5px'
    }
  }
};

/**
 * 환경별 설정을 로드합니다.
 * @param {string} env - 환경 이름 (예: 'development', 'production')
 * @returns {Object} 환경별 설정이 적용된 설정 객체
 */
export function loadEnvironmentConfig(env = 'development') {
  const envConfig = {};
  
  switch (env) {
    case 'production':
      Object.assign(envConfig, {
        apiBaseUrl: 'https://api.example.com',
        autoSaveDelay: 5000
      });
      break;
      
    case 'test':
      Object.assign(envConfig, {
        apiBaseUrl: 'http://localhost:3001',
        autoSaveDelay: 1000
      });
      break;
      
    case 'development':
    default:
      // 기본 설정 사용
      break;
  }
  
  return { ...CONFIG, ...envConfig };
}

/**
 * 사용자 정의 설정을 적용합니다.
 * @param {Object} customConfig - 사용자 정의 설정 객체
 * @returns {Object} 사용자 정의 설정이 적용된 설정 객체
 */
export function applyCustomConfig(customConfig = {}) {
  return { ...CONFIG, ...customConfig };
}

/**
 * 로컬 스토리지에서 설정을 로드합니다.
 * @param {string} key - 설정 키
 * @param {*} defaultValue - 기본값
 * @returns {*} 로드된 설정 값
 */
export function loadConfigFromStorage(key, defaultValue) {
  try {
    const storedValue = localStorage.getItem(`config_${key}`);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  } catch (error) {
    console.error('설정 로드 오류:', error);
    return defaultValue;
  }
}

/**
 * 로컬 스토리지에 설정을 저장합니다.
 * @param {string} key - 설정 키
 * @param {*} value - 설정 값
 */
export function saveConfigToStorage(key, value) {
  try {
    localStorage.setItem(`config_${key}`, JSON.stringify(value));
  } catch (error) {
    console.error('설정 저장 오류:', error);
  }
}

export default CONFIG; 