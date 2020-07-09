#### 자바스크립트의 기본 문법
##### 1. 변수 - 값을 저장하고 그 저장된 값을 참조하기 위해 사용
```Javascript
var x; //변수선언
x=6; //정수값의 할당
```
##### 1) 동적 타이핑: 자바스크립트는 미리 데이터타입 지정하지 않음, 변수에 할당된 값의 타입에 의해 동적으로 변수의 타입이 결정됨
##### 2) 변수 호이스팅 : 모든 선언문이 해당 스코프의 선두로 옮겨진 것 처럼 동작하는 특성, 자바스크립트는 모든 선언문이 선언되기 이전에 참조 가능!
##### - 변수 생성 3단계 
```Javascript
console.log(foo); // ① undefined
var foo = 123;
console.log(foo); // ② 123
{
  var foo = 456;
}
console.log(foo); // ③ 456
```
##### 변수가 먼저 호이스팅 되어 `console.log(foo)`앞에 옮겨짐, foo에는 undefined가 할당된상태 -> 값은 2행에서 할당됨
<pre><code>
선언단계 : 변수객체에 변수 등록, 변수객체는 스코프가 참조하는 대상이 됨
초기화 단계 : 변수객체에 등록된 변수를 메모리에 할당, 이 단계에서 변수는 undefined로 초기화됨
할당 단계 : undefined로 초기화된 변수에 실제 값 할당
</code></pre>
##### 2. 값 - 프로그램에 의해 조작될 수 있는 대상
```Javascript
var str= 'Hello World!'; //변수 str 선언 후 문자열 리터럴을 값으로 할당
```
##### 3. 데이터 타입
<pre><code>원시타입 : number, string, boolean, null, undefined, symbol  
객체타입 : object</code></pre>
##### 1) 원시타입 : 변경 불가능한 값, 값에 의한 전달(pass-by-value)
##### - number : 자바스크립트는 하나의 숫자타입만 존재, 64비트 부동소수점형을 따름
##### - string : 문자열 타입, 변경 x
##### - boolean : `ture` `fales`
##### - undefined : `undefined` , 선언되었지만 값을 할당하지 않은 변수에 접근or존재하지 않는 객체 프로퍼티에 접근
##### - null : `null`, null 타입 확인시 `===` 사용
##### - symbol : 변경불가한 원시타입의 값, 주로 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키를 만들기 위해 사용, symbol 함수 호출
##### 2) 객체타입 : 데이터와 그 데이터에 관련한 동작을 모두 포함할 수 있는 개념적 존재, 데이터(프로퍼티)+동작(메소드), 참조에 의한 전달(pass-by-reference)

##### 4. 연산자 - 산술, 문자열 연결, 할당, 비교, 논리, 타입, 인스턴스 생성 연산자
```Javascript
var str = 'My name is ' + 'Lee'; //문자열 연결 연산자, My name is Lee  
var color = 'red'; //할당 연산자
var type = typeof 'Hi'; //타입 연산자, "string" 출력
var today = new Date(); //인스턴스 생성 연산자, 한국 표준시 출력
```
##### 5. 키워드 - 수행할 동작 규정
##### 6. 함수 - 이름과 매개변수를 가지며 필요한때에 호출할 수 있다
```Javascript
function square(number){
 return number * number;
 } //함수 정의(함수 선언문)  
 
 square(2); //함수 호출
 ```
 ##### 7. 객체 - 데이터를 의미하는 프로퍼티와 데이터를 참조하고 조작할 수 있는 동작을 의미하는 메소드로 구성된 집합
 ```Javascript
 ver person = {
  name: 'Lee'.
  gender: 'male',
  sayHello: function(){
    console.log('Hi! My name is ' + this.name);
   }
  };
  console.log(typeof person); //person의 타입은 객체(object 출력)
  console.log(person); //객체 정보 출력
  
  person.sayHello(); // Hi! My name is Lee 출력
  
