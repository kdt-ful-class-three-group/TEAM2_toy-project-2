/**
 * API 호출 관련 유틸리티 함수들을 제공하는 모듈
 */
import { CONFIG } from './ConfigManager.js';

/**
 * 기본 API 요청 옵션
 */
const DEFAULT_OPTIONS = {
  headers: {
    'Content-Type': 'application/json'
  }
};

/**
 * API 엔드포인트 URL을 생성합니다.
 * @param {string} endpoint - API 엔드포인트 경로
 * @returns {string} 완전한 API URL
 */
function createApiUrl(endpoint) {
  const baseUrl = CONFIG.apiBaseUrl || `http://localhost:${CONFIG.port || 3000}`;
  return `${baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
}

/**
 * GET 요청을 보냅니다.
 * @param {string} endpoint - API 엔드포인트 경로
 * @param {Object} [options={}] - 추가 요청 옵션
 * @returns {Promise<any>} 응답 데이터
 */
async function get(endpoint, options = {}) {
  try {
    const url = createApiUrl(endpoint);
    const response = await fetch(url, {
      method: 'GET',
      ...DEFAULT_OPTIONS,
      ...options
    });
    
    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('GET 요청 오류:', error);
    throw error;
  }
}

/**
 * POST 요청을 보냅니다.
 * @param {string} endpoint - API 엔드포인트 경로
 * @param {Object} data - 전송할 데이터
 * @param {Object} [options={}] - 추가 요청 옵션
 * @returns {Promise<any>} 응답 데이터
 */
async function post(endpoint, data, options = {}) {
  try {
    const url = createApiUrl(endpoint);
    const response = await fetch(url, {
      method: 'POST',
      ...DEFAULT_OPTIONS,
      ...options,
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status} ${response.statusText}`);
    }
    
    // 응답이 JSON이 아닐 수 있으므로 조건부로 처리
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return response;
  } catch (error) {
    console.error('POST 요청 오류:', error);
    throw error;
  }
}

/**
 * PUT 요청을 보냅니다.
 * @param {string} endpoint - API 엔드포인트 경로
 * @param {Object} data - 전송할 데이터
 * @param {Object} [options={}] - 추가 요청 옵션
 * @returns {Promise<any>} 응답 데이터
 */
async function put(endpoint, data, options = {}) {
  try {
    const url = createApiUrl(endpoint);
    const response = await fetch(url, {
      method: 'PUT',
      ...DEFAULT_OPTIONS,
      ...options,
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status} ${response.statusText}`);
    }
    
    // 응답이 JSON이 아닐 수 있으므로 조건부로 처리
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return response;
  } catch (error) {
    console.error('PUT 요청 오류:', error);
    throw error;
  }
}

/**
 * DELETE 요청을 보냅니다.
 * @param {string} endpoint - API 엔드포인트 경로
 * @param {Object} [data=null] - 전송할 데이터 (있는 경우)
 * @param {Object} [options={}] - 추가 요청 옵션
 * @returns {Promise<any>} 응답 데이터
 */
async function del(endpoint, data = null, options = {}) {
  try {
    const url = createApiUrl(endpoint);
    const requestOptions = {
      method: 'DELETE',
      ...DEFAULT_OPTIONS,
      ...options
    };
    
    if (data) {
      requestOptions.body = JSON.stringify(data);
    }
    
    const response = await fetch(url, requestOptions);
    
    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status} ${response.statusText}`);
    }
    
    // 응답이 JSON이 아닐 수 있으므로 조건부로 처리
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return response;
  } catch (error) {
    console.error('DELETE 요청 오류:', error);
    throw error;
  }
}

/**
 * 특정 API 서비스 객체를 생성합니다.
 * @param {Object} endpoints - 서비스 엔드포인트 정의
 * @returns {Object} API 서비스 객체
 */
function createApiService(endpoints) {
  const service = {};
  
  Object.entries(endpoints).forEach(([name, config]) => {
    const { method = 'GET', path, transform } = config;
    
    service[name] = async (data, options = {}) => {
      let response;
      
      switch (method.toUpperCase()) {
        case 'GET':
          response = await get(path, options);
          break;
        case 'POST':
          response = await post(path, data, options);
          break;
        case 'PUT':
          response = await put(path, data, options);
          break;
        case 'DELETE':
          response = await del(path, data, options);
          break;
        default:
          throw new Error(`지원하지 않는 HTTP 메서드: ${method}`);
      }
      
      // 응답 데이터 변환 함수가 있으면 적용
      return transform ? transform(response) : response;
    };
  });
  
  return service;
}

// 애플리케이션에서 사용하는 API 서비스
const todoApiService = createApiService({
  getData: {
    method: 'GET',
    path: '/data'
  },
  saveItem: {
    method: 'POST',
    path: '/write'
  },
  deleteItem: {
    method: 'POST',
    path: '/delete'
  }
});

export {
  get,
  post,
  put,
  del as delete,
  createApiService,
  todoApiService
}; 