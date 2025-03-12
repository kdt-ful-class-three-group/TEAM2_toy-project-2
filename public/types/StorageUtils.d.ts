/**
 * 로컬 스토리지 관련 유틸리티 함수들을 제공하는 모듈
 * @module StorageUtils
 */

/**
 * 로컬 스토리지에 데이터를 저장합니다.
 * @param {string} key - 저장할 데이터의 키
 * @param {*} value - 저장할 데이터 값
 * @returns {boolean} 저장 성공 여부
 */
export function saveToStorage<T>(key: string, value: T): boolean;

/**
 * 로컬 스토리지에서 데이터를 로드합니다.
 * @param {string} key - 로드할 데이터의 키
 * @param {*} [defaultValue=null] - 데이터가 없을 경우 반환할 기본값
 * @returns {*} 로드된 데이터 또는 기본값
 */
export function loadFromStorage<T>(key: string, defaultValue?: T | null): T | null;

/**
 * 로컬 스토리지에서 데이터를 삭제합니다.
 * @param {string} key - 삭제할 데이터의 키
 * @returns {boolean} 삭제 성공 여부
 */
export function removeFromStorage(key: string): boolean;

/**
 * 로컬 스토리지의 모든 데이터를 삭제합니다.
 * @returns {boolean} 삭제 성공 여부
 */
export function clearStorage(): boolean;

/**
 * 로컬 스토리지에 키가 존재하는지 확인합니다.
 * @param {string} key - 확인할 키
 * @returns {boolean} 키 존재 여부
 */
export function hasStorageItem(key: string): boolean;

/**
 * 로컬 스토리지의 모든 키를 가져옵니다.
 * @returns {string[]} 키 배열
 */
export function getStorageKeys(): string[];

/**
 * 로컬 스토리지의 용량을 계산합니다.
 * @returns {number} 사용 중인 용량 (바이트)
 */
export function getStorageSize(): number;

/**
 * 세션 스토리지에 데이터를 저장합니다.
 * @param {string} key - 저장할 데이터의 키
 * @param {*} value - 저장할 데이터 값
 * @returns {boolean} 저장 성공 여부
 */
export function saveToSessionStorage<T>(key: string, value: T): boolean;

/**
 * 세션 스토리지에서 데이터를 로드합니다.
 * @param {string} key - 로드할 데이터의 키
 * @param {*} [defaultValue=null] - 데이터가 없을 경우 반환할 기본값
 * @returns {*} 로드된 데이터 또는 기본값
 */
export function loadFromSessionStorage<T>(key: string, defaultValue?: T | null): T | null; 