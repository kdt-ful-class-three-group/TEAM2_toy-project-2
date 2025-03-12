/**
 * 유효성 검사 관련 유틸리티 함수들을 제공하는 모듈
 * @module ValidationUtils
 */

/**
 * 유효성 검사 결과 인터페이스
 */
export interface ValidationResult {
  /** 유효성 여부 */
  isValid: boolean;
  /** 오류 메시지 (유효하지 않은 경우) */
  message?: string;
}

/**
 * 유효성 검사 규칙 인터페이스
 */
export interface ValidationRule {
  /** 규칙 이름 */
  name: string;
  /** 검사 함수 */
  validate: (value: any, ...args: any[]) => boolean;
  /** 오류 메시지 */
  message: string | ((value: any, ...args: any[]) => string);
}

/**
 * 유효성 검사 스키마 인터페이스
 */
export interface ValidationSchema {
  /** 필드별 유효성 검사 규칙 */
  [field: string]: ValidationRule[];
}

/**
 * 유효성 검사 오류 인터페이스
 */
export interface ValidationErrors {
  /** 필드별 오류 메시지 */
  [field: string]: string[];
}

/**
 * 이메일 형식 검사
 * @param {string} email - 검사할 이메일 주소
 * @returns {ValidationResult} 유효성 검사 결과
 */
export function validateEmail(email: string): ValidationResult;

/**
 * 비밀번호 강도 검사
 * @param {string} password - 검사할 비밀번호
 * @param {number} [minLength=8] - 최소 길이
 * @returns {ValidationResult} 유효성 검사 결과
 */
export function validatePassword(password: string, minLength?: number): ValidationResult;

/**
 * 필수 입력값 검사
 * @param {any} value - 검사할 값
 * @param {string} [fieldName='값'] - 필드 이름
 * @returns {ValidationResult} 유효성 검사 결과
 */
export function validateRequired(value: any, fieldName?: string): ValidationResult;

/**
 * 최소 길이 검사
 * @param {string} value - 검사할 문자열
 * @param {number} minLength - 최소 길이
 * @param {string} [fieldName='값'] - 필드 이름
 * @returns {ValidationResult} 유효성 검사 결과
 */
export function validateMinLength(value: string, minLength: number, fieldName?: string): ValidationResult;

/**
 * 최대 길이 검사
 * @param {string} value - 검사할 문자열
 * @param {number} maxLength - 최대 길이
 * @param {string} [fieldName='값'] - 필드 이름
 * @returns {ValidationResult} 유효성 검사 결과
 */
export function validateMaxLength(value: string, maxLength: number, fieldName?: string): ValidationResult;

/**
 * 숫자 범위 검사
 * @param {number} value - 검사할 숫자
 * @param {number} min - 최소값
 * @param {number} max - 최대값
 * @param {string} [fieldName='값'] - 필드 이름
 * @returns {ValidationResult} 유효성 검사 결과
 */
export function validateRange(value: number, min: number, max: number, fieldName?: string): ValidationResult;

/**
 * 정규식 패턴 검사
 * @param {string} value - 검사할 문자열
 * @param {RegExp} pattern - 정규식 패턴
 * @param {string} [message='유효하지 않은 형식입니다'] - 오류 메시지
 * @returns {ValidationResult} 유효성 검사 결과
 */
export function validatePattern(value: string, pattern: RegExp, message?: string): ValidationResult;

/**
 * 두 값이 일치하는지 검사
 * @param {any} value1 - 첫 번째 값
 * @param {any} value2 - 두 번째 값
 * @param {string} [message='값이 일치하지 않습니다'] - 오류 메시지
 * @returns {ValidationResult} 유효성 검사 결과
 */
export function validateMatch(value1: any, value2: any, message?: string): ValidationResult;

/**
 * 객체 유효성 검사
 * @param {Object} data - 검사할 객체
 * @param {ValidationSchema} schema - 유효성 검사 스키마
 * @returns {ValidationErrors} 유효성 검사 오류
 */
export function validateObject(data: Record<string, any>, schema: ValidationSchema): ValidationErrors;

/**
 * 폼 유효성 검사
 * @param {HTMLFormElement} form - 검사할 폼 요소
 * @param {ValidationSchema} schema - 유효성 검사 스키마
 * @returns {ValidationErrors} 유효성 검사 오류
 */
export function validateForm(form: HTMLFormElement, schema: ValidationSchema): ValidationErrors;

/**
 * 유효성 검사 규칙 생성
 * @param {string} name - 규칙 이름
 * @param {Function} validate - 검사 함수
 * @param {string|Function} message - 오류 메시지 또는 메시지 생성 함수
 * @returns {ValidationRule} 유효성 검사 규칙
 */
export function createValidationRule(
  name: string,
  validate: (value: any, ...args: any[]) => boolean,
  message: string | ((value: any, ...args: any[]) => string)
): ValidationRule; 