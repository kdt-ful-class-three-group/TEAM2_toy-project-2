/**
 * 할 일 관리 기능을 제공하는 모듈
 * @module TodoManager
 */

/**
 * 할 일 항목 인터페이스
 */
export interface Todo {
  /** 할 일 고유 ID */
  id: string;
  /** 할 일 내용 */
  text: string;
  /** 완료 여부 */
  completed: boolean;
  /** 생성 날짜 */
  createdAt: string;
}

/**
 * 할 일 관리자 클래스
 */
declare class TodoManager {
  /**
   * TodoManager 인스턴스 생성
   */
  constructor();

  /**
   * 할 일 목록 초기화 및 이벤트 리스너 설정
   */
  init(): void;

  /**
   * 할 일 목록 로드
   * @returns {Promise<Todo[]>} 할 일 목록
   */
  loadTodos(): Promise<Todo[]>;

  /**
   * 새로운 할 일 추가
   * @param {string} text - 할 일 내용
   * @returns {Promise<Todo>} 추가된 할 일 객체
   */
  addTodo(text: string): Promise<Todo>;

  /**
   * 할 일 삭제
   * @param {string} id - 삭제할 할 일 ID
   * @returns {Promise<void>}
   */
  deleteTodo(id: string): Promise<void>;

  /**
   * 할 일 완료 상태 토글
   * @param {string} id - 상태를 변경할 할 일 ID
   * @returns {Promise<Todo>} 업데이트된 할 일 객체
   */
  toggleTodoStatus(id: string): Promise<Todo>;

  /**
   * 할 일 내용 업데이트
   * @param {string} id - 업데이트할 할 일 ID
   * @param {string} newText - 새로운 할 일 내용
   * @returns {Promise<Todo>} 업데이트된 할 일 객체
   */
  updateTodoText(id: string, newText: string): Promise<Todo>;

  /**
   * 할 일 목록 렌더링
   * @param {Todo[]} todos - 렌더링할 할 일 목록
   */
  renderTodos(todos: Todo[]): void;
}

/**
 * TodoManager 인스턴스
 */
declare const todoManager: TodoManager;

export default todoManager; 