// 프로퍼티 값 읽기
var person = {
    'first-name':'ung-mo',
    'last-name':'Lee',
    gender:'male',
    1:10
};

console.log(person);

//프로퍼티 값에 접근 -> 대괄호 표기법
//프로퍼티 이름이 유효한 자바스크립트 이름이 아니거나 예약어인경우
//대괄호 내에 들어가는 프로퍼티 이름은 반드시 문자열!
console.log(person['first-name']);
console.log(person['gender']);
console.log(person['1']);

//프로퍼티 값에 접근 -> 마침표 표기법 
//프로퍼티 키가 유효한 자바스크립트 이름이고 예약어가 아닌 경우
//마침표, 대괄호 표기법 모두 사용가능
console.log(person.gender);

var person={
    'first-name':'ung-mo',
    'last-name':'lee',
    gender:'male'
};

//프로퍼티 값 갱신
person['first-name']='kim';
console.log(person['first-name']);

//프로퍼티 동적 생성
person.age=20;
console.log(person.age);

//프로퍼티 삭제
delete person; //피연산자는 프로퍼티 키!
console.log(person);