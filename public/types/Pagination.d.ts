/**
 * 페이지네이션 관련 기능을 제공하는 모듈
 * @module Pagination
 */

/**
 * 페이지네이션 상태 관리 객체
 */
export interface PageState {
  /** 데이터 배열 */
  dataArray: any[];
  /** 현재 페이지 번호 */
  currentPage: number;
  /** 전체 페이지 수 */
  totalPage: number;
  /** 페이지당 항목 수 */
  limit: number;
}

/**
 * 페이지네이션 상태 관리 객체
 */
export const pageState: PageState;

/**
 * 페이지네이션 기능 모듈
 */
interface Pagination {
  /**
   * 초기화
   */
  init(): void;
  
  /**
   * 데이터 로드 및 초기 설정
   */
  loadData(): void;
  
  /**
   * 목록에 따라 숫자 버튼 생성 + 클릭이벤트 적용하는 함수
   * 해당 페이지의 숫자버튼 스타일 지정
   */
  makeNumBtn(): void;
}

/**
 * 목록에 따라 숫자 버튼 생성 + 클릭이벤트 적용하는 함수
 * 해당 페이지의 숫자버튼 스타일 지정
 */
export function makeNumBtn(): void; 