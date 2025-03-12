# 유틸리티 모듈 (Utility Modules)

이 디렉토리는 애플리케이션 전반에서 사용되는 공통 유틸리티 함수들을 모듈화하여 제공합니다.

## 모듈 구성

- **DOMUtils**: DOM 조작 관련 유틸리티
- **APIService**: API 호출 관련 유틸리티
- **EventUtils**: 이벤트 처리 관련 유틸리티
- **ConfigManager**: 설정 관리 유틸리티
- **StorageUtils**: 로컬 스토리지 관련 유틸리티

## 사용 방법

### 전체 유틸리티 가져오기

```javascript
import Utils from './util/index.js';

// DOM 유틸리티 사용
Utils.DOM.showElement(element);

// API 유틸리티 사용
Utils.API.todoApiService.getData()
  .then(data => console.log(data));

// 이벤트 유틸리티 사용
const debouncedFunction = Utils.Event.debounce(myFunction, 300);

// 설정 사용
console.log(Utils.Config.CONFIG.maxContentLength);

// 스토리지 유틸리티 사용
Utils.Storage.saveToStorage('key', value);
```

### 개별 유틸리티 가져오기

```javascript
// 특정 유틸리티만 가져오기
import { showElement, hideElement } from './util/DOMUtils.js';
import { debounce } from './util/EventUtils.js';
import { CONFIG } from './util/ConfigManager.js';
import { saveToStorage, loadFromStorage } from './util/StorageUtils.js';
import { todoApiService } from './util/APIService.js';

// 사용 예시
showElement(myElement);
const debouncedHandler = debounce(myHandler, 300);
console.log(CONFIG.maxContentLength);
saveToStorage('key', value);
```

## 모듈별 주요 기능

### DOMUtils

DOM 요소 조작을 위한 유틸리티 함수들을 제공합니다.

```javascript
import { showElement, hideElement, toggleElement, createElement } from './util/DOMUtils.js';

// 요소 표시/숨기기
showElement(element);
hideElement(element);
toggleElement(element);

// 요소 생성
const newElement = createElement('div', { id: 'myDiv', class: 'container' }, '내용', { color: 'red' });
```

### APIService

API 호출을 위한 유틸리티 함수들을 제공합니다.

```javascript
import { get, post, todoApiService } from './util/APIService.js';

// 기본 HTTP 메서드 사용
get('/api/data').then(data => console.log(data));
post('/api/save', { name: 'value' }).then(response => console.log(response));

// 미리 정의된 API 서비스 사용
todoApiService.getData().then(data => console.log(data));
todoApiService.saveItem({ title: '제목', content: '내용' });
```

### EventUtils

이벤트 처리를 위한 유틸리티 함수들을 제공합니다.

```javascript
import { addEvent, debounce, throttle } from './util/EventUtils.js';

// 이벤트 리스너 등록
addEvent(element, 'click', handleClick);

// 디바운스 함수 (연속 호출 시 마지막 호출만 실행)
const debouncedSearch = debounce(searchFunction, 300);
inputElement.addEventListener('input', debouncedSearch);

// 쓰로틀 함수 (일정 시간 간격으로 실행 제한)
const throttledScroll = throttle(scrollHandler, 100);
window.addEventListener('scroll', throttledScroll);
```

### ConfigManager

애플리케이션 설정을 관리하는 유틸리티 함수들을 제공합니다.

```javascript
import { CONFIG, loadConfigFromStorage, saveConfigToStorage } from './util/ConfigManager.js';

// 기본 설정 사용
console.log(CONFIG.maxContentLength);
console.log(CONFIG.autoSaveDelay);

// 설정 저장 및 로드
saveConfigToStorage('theme', 'dark');
const theme = loadConfigFromStorage('theme', 'light'); // 기본값 'light'
```

### StorageUtils

로컬 스토리지 관련 유틸리티 함수들을 제공합니다.

```javascript
import { saveToStorage, loadFromStorage, removeFromStorage } from './util/StorageUtils.js';

// 데이터 저장
saveToStorage('user', { name: '홍길동', age: 30 });

// 데이터 로드
const user = loadFromStorage('user');
console.log(user.name); // '홍길동'

// 데이터 삭제
removeFromStorage('user');
```

## 확장 및 유지보수

새로운 유틸리티 함수를 추가하려면 해당 모듈 파일에 함수를 추가하고 export 문에 포함시키세요. 새로운 모듈을 추가하려면 모듈 파일을 생성하고 `index.js`에 import 및 export 구문을 추가하세요. 