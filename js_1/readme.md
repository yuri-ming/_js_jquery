#### 자바스크립트의 기본 문법
##### 1) 변수 - 값을 저장하고 그 저장된 값을 참조하기 위해 사용
```Javascript
var x; //변수선언
x=6; //정수값의 할당
```
#### 2) 값 - 프로그램에 의해 조작될 수 있는 대상
```Javascript
var str= 'Hello World!'; //변수 str 선언 후 문자열 리터럴을 값으로 할당
```
#### 데이터 타입
<pre><code>number, string, boolean, null, undefined, symbol, 객체타입 object</code></pre>
#### - 자바스크립트는 미리 데이터타입 지정하지 않음, 변수에 할당된 값의 타입에 의해 동적으로 변수의 타입이 결정됨 (동적 타이핑)
```Javascript
var num1= 1001;  
var num2= 10.50;    

var string = 'Hello' //string  

var bool= true //boolean

var bar; //undefined

var obj= {name: 'Lee', gender:'male' }; //object

var array = [1,2,3]; //Array

var foo = function() {} //function
```
#### 3) 연산자 - 산술, 문자열 연결, 할당, 비교, 논리, 타입, 인스턴스 생성 연산자
```Javascript
var str = 'My name is ' + 'Lee'; //문자열 연결 연산자, My name is Lee  
var color = 'red'; //할당 연산자
var type = typeof 'Hi'; //타입 연산자, "string" 출력
var today = new Date(); //인스턴스 생성 연산자, 한국 표준시 출력
```
#### 4) 키워드 - 수행할 동작 규정
#### 5) 함수 - 이름과 매개변수를 가지며 필요한때에 호출할 수 있다
```Javascript
function square(number){
 return number * number;
 } //함수 정의(함수 선언문)  
 
 square(2); //함수 호출
 ```
 #### 6) 객체 - 데이터를 의미하는 프로퍼티와 데이터를 참조하고 조작할 수 있는 동작을 의미하는 메소드로 구성된 집합
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
  
