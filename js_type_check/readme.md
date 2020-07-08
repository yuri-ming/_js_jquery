#### 자바스크립트의 타입 체크
##### 1. 타입 연산자 `type of` 
##### - 피연산자의 데이터 타입을 문자열로 반환
```Javascript
typeof '';              // string
typeof 1;               // number
typeof NaN;             // number
typeof true;            // boolean
typeof [];              // object
typeof {};              // object
typeof new String();    // object
typeof new Date();      // object
typeof /test/gi;        // object
typeof function () {};  // function
typeof undefined;       // undefined
typeof null;            // object (설계적 결함)
typeof undeclared;      // undefined (설계적 결함)
```
##### 2. `Object.prototype.toString` 
##### - 객체를 나타내는 문자열을 반환하는 메소드
##### 3. `instanceof`
##### -  피연산자인 객체가 우항에 명시한 타입의 인스턴스인지 여부를 알려줌
##### 4. 유사 배열 객체
##### - 배열인치 체크하기 위해 `Array.isArray` 메소드 사용
```Javascript
console.log(Array.isArray([]));    // true
console.log(Array.isArray({}));    // false
console.log(Array.isArray('123')); // false
```