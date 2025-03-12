/**
 * API 통신 관련 기능을 제공하는 모듈
 * @module APIService
 */

/**
 * HTTP 요청 옵션 인터페이스
 */
export interface RequestOptions {
  /** HTTP 메서드 */
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  /** 요청 헤더 */
  headers?: Record<string, string>;
  /** 요청 바디 */
  body?: any;
  /** 쿼리 파라미터 */
  params?: Record<string, string>;
}

/**
 * API 서비스 클래스
 */
declare class APIService {
  /**
   * APIService 인스턴스 생성
   * @param {string} baseUrl - API 기본 URL
   */
  constructor(baseUrl: string);

  /**
   * HTTP 요청 실행
   * @param {string} endpoint - API 엔드포인트
   * @param {RequestOptions} options - 요청 옵션
   * @returns {Promise<any>} 응답 데이터
   */
  request<T = any>(endpoint: string, options?: RequestOptions): Promise<T>;

  /**
   * GET 요청 실행
   * @param {string} endpoint - API 엔드포인트
   * @param {Record<string, string>} params - 쿼리 파라미터
   * @returns {Promise<any>} 응답 데이터
   */
  get<T = any>(endpoint: string, params?: Record<string, string>): Promise<T>;

  /**
   * POST 요청 실행
   * @param {string} endpoint - API 엔드포인트
   * @param {any} data - 요청 바디
   * @param {RequestOptions} options - 추가 요청 옵션
   * @returns {Promise<any>} 응답 데이터
   */
  post<T = any>(endpoint: string, data?: any, options?: RequestOptions): Promise<T>;

  /**
   * PUT 요청 실행
   * @param {string} endpoint - API 엔드포인트
   * @param {any} data - 요청 바디
   * @param {RequestOptions} options - 추가 요청 옵션
   * @returns {Promise<any>} 응답 데이터
   */
  put<T = any>(endpoint: string, data?: any, options?: RequestOptions): Promise<T>;

  /**
   * DELETE 요청 실행
   * @param {string} endpoint - API 엔드포인트
   * @param {RequestOptions} options - 추가 요청 옵션
   * @returns {Promise<any>} 응답 데이터
   */
  delete<T = any>(endpoint: string, options?: RequestOptions): Promise<T>;

  /**
   * PATCH 요청 실행
   * @param {string} endpoint - API 엔드포인트
   * @param {any} data - 요청 바디
   * @param {RequestOptions} options - 추가 요청 옵션
   * @returns {Promise<any>} 응답 데이터
   */
  patch<T = any>(endpoint: string, data?: any, options?: RequestOptions): Promise<T>;
}

/**
 * 기본 API 서비스 인스턴스
 */
declare const apiService: APIService;

export default apiService; 