/**
 * 로컬 스토리지 관련 유틸리티 함수들을 제공하는 모듈
 */

/**
 * 로컬 스토리지에 데이터를 저장합니다.
 * @param {string} key - 저장할 데이터의 키
 * @param {*} value - 저장할 데이터 값
 * @returns {boolean} 저장 성공 여부
 */
function saveToStorage(key, value) {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
    return true;
  } catch (error) {
    console.error('로컬 스토리지 저장 오류:', error);
    return false;
  }
}

/**
 * 로컬 스토리지에서 데이터를 로드합니다.
 * @param {string} key - 로드할 데이터의 키
 * @param {*} [defaultValue=null] - 데이터가 없을 경우 반환할 기본값
 * @returns {*} 로드된 데이터 또는 기본값
 */
function loadFromStorage(key, defaultValue = null) {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return defaultValue;
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    console.error('로컬 스토리지 로드 오류:', error);
    return defaultValue;
  }
}

/**
 * 로컬 스토리지에서 데이터를 삭제합니다.
 * @param {string} key - 삭제할 데이터의 키
 * @returns {boolean} 삭제 성공 여부
 */
function removeFromStorage(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('로컬 스토리지 삭제 오류:', error);
    return false;
  }
}

/**
 * 로컬 스토리지의 모든 데이터를 삭제합니다.
 * @returns {boolean} 삭제 성공 여부
 */
function clearStorage() {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('로컬 스토리지 초기화 오류:', error);
    return false;
  }
}

/**
 * 로컬 스토리지에 키가 존재하는지 확인합니다.
 * @param {string} key - 확인할 키
 * @returns {boolean} 키 존재 여부
 */
function hasStorageItem(key) {
  return localStorage.getItem(key) !== null;
}

/**
 * 로컬 스토리지의 모든 키를 가져옵니다.
 * @returns {string[]} 키 배열
 */
function getStorageKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }
  return keys;
}

/**
 * 로컬 스토리지의 용량을 계산합니다.
 * @returns {number} 사용 중인 용량 (바이트)
 */
function getStorageSize() {
  let size = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    size += (key.length + value.length) * 2; // UTF-16 문자는 2바이트
  }
  return size;
}

/**
 * 세션 스토리지에 데이터를 저장합니다.
 * @param {string} key - 저장할 데이터의 키
 * @param {*} value - 저장할 데이터 값
 * @returns {boolean} 저장 성공 여부
 */
function saveToSessionStorage(key, value) {
  try {
    const serializedValue = JSON.stringify(value);
    sessionStorage.setItem(key, serializedValue);
    return true;
  } catch (error) {
    console.error('세션 스토리지 저장 오류:', error);
    return false;
  }
}

/**
 * 세션 스토리지에서 데이터를 로드합니다.
 * @param {string} key - 로드할 데이터의 키
 * @param {*} [defaultValue=null] - 데이터가 없을 경우 반환할 기본값
 * @returns {*} 로드된 데이터 또는 기본값
 */
function loadFromSessionStorage(key, defaultValue = null) {
  try {
    const serializedValue = sessionStorage.getItem(key);
    if (serializedValue === null) {
      return defaultValue;
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    console.error('세션 스토리지 로드 오류:', error);
    return defaultValue;
  }
}

export {
  saveToStorage,
  loadFromStorage,
  removeFromStorage,
  clearStorage,
  hasStorageItem,
  getStorageKeys,
  getStorageSize,
  saveToSessionStorage,
  loadFromSessionStorage
}; 