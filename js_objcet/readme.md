#### 자바스크립트의 객체 개념
##### 1. 객체란 무엇인가?
<pre><code>자바스크립트를 이루고 있는 거의 모든 것(함수, 배열, 정규표현식 등)
자바스크립트의 객체는 키와 값으로 구성된 프로퍼티들의 집합  
프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라고 부름</code></pre>
##### 1) 프로퍼티
##### - 프로퍼티는 프로퍼티 키(이름)와 프로퍼티 값으로 구성된다. 프로퍼티는 프로퍼티 키로 유일하게 식별할 수 있다.
<pre><code>프로퍼티 키: 빈 문자열을 포함하는 모든 문자열 또는 symbol 값  
프로퍼티 값: 모든 값</code></pre>
##### - 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어씀
##### 2) 메소드
##### - 메소드는 객체에 제한되어 있는 함수를 의미한다.
##### 2. 객체 생성 방법
##### 1) 객체 리터럴
##### - 중괄호{}를 사용하여 객체를 생성하는데, {}내에 1개 이상의 프로퍼티를 기술하면 해당 프로퍼티가 추가된 객체를 생성할 수 있다.
```Javascript 
var emptyObject = {};
console.log(typeof emptyObject); // object

var person = {
  name: 'Lee',
  gender: 'male',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}

person.sayHello(); // Hi! My name is Lee
```
##### 2) Object 생성자 함수
##### - new 연산자와 Object 생성자 함수를 호출하여 빈 객체를 생성한 후 프로퍼티 혹은 메소드를 추가하여 객체를 완성하는 방법
##### 3) 생성자 함수 
##### - 프로퍼티가 동일한 객체 여러개를 간편하게 생성 가능
```Javascript
// 생성자 함수
function Person(name, gender) { //대문자로 시작하는 생성자 함수 이름
  this.name = name; //this는 생성자 함수가 생성할 인스턴스를 가르킴, this에 연결되어있는 프로퍼티와 메소드는 public, 생성자 함수 내에 선언된 일반변수는 private
  this.gender = gender;
  this.sayHello = function(){
    console.log('Hi! My name is ' + this.name);
  };
}

// 인스턴스의 생성
var person1 = new Person('Lee', 'male');
var person2 = new Person('Kim', 'female');

console.log('person1: ', typeof person1);
console.log('person2: ', typeof person2);
console.log('person1: ', person1);
console.log('person2: ', person2);

person1.sayHello();
person2.sayHello();
```
##### 3. 객체 프로퍼티 접근
##### 1) 프로퍼티 키
<pre><code>프로퍼티 키는 문자열이므로 따옴표를 사용  
자바스크립트에서 사용 가능한 유효한 이름인 경우, 따옴표 생략 가능</code></pre>
```Javascript
'first-name','last-name',gender,function
```
```Javascript
var foo={}; //foo 객체 생성
foo.a =1; //.연산자를 이용하여 a라는 이름의 프로퍼티를 생성하면서 1이라는 값을 할당
var sum = foo.a+10; //.연산자를 이용하여 foo 객체의 a 프로퍼티에 접근하여 값을 활용가능
console.log(sum); //11
```
##### 2) 프로퍼티 값 읽기
##### - 마침표 표기법 : 프로퍼티가 유효한 자바스크립트 이름이고 예약어가 아닌경우
```Javascript
console.log(person.gender);
```
##### - 대괄호 표기법 : 프로퍼티 이름이 유효한 자바스크립트 이름이 아니거나 예약어인 경우, 대괄호 내에 들어가는 프로퍼티 이름은 반드시 문자열!
```Javascript
console.log(person['first-name']);
```
##### 3) 프로퍼티 삭제 : delete 연산자 사용, 피연산자는 프로퍼티 키여야함
```Javascript
delete person;
```
##### 4. for-in문 :객체(배열포함)에 포함된 모든 프로퍼티에 대해 루프를 수행함
```Javascript
for(var prop in person){
  console.log(prop + ':' + person[prop]); //prop에 객체의 프로퍼티 이름이 반환됨
  }
  
 for(var index in array){...} //배열의 경우 index에 인덱스가 반환됨
 ```
##### 5. Pass-by-Reference , Pass-by-Value
<pre><code>Pass-by-Reference : 객체타입, 객체의 모든 연산이 실제값이 아닌 참조값으로 처리됨, 객체타입은 동적으로 변화할 수 있으므로 런타임에 메모리 공간을 확보하고 메모리의 힙영역에 저장됨,  
Pass-by-Value : 원시타입, 실제 값으로 전달됨(복사되어 전달), 한번 값이 정해지면 변경할 수 없음, 런타임에 메모리의 스택영역에 고정된 메모리 영역을 점유하고 저장됨
