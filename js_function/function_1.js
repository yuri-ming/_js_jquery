//기명 함수 표현식
var foo = function multiply(a,b){
    return a*b;
};

//익명 함수 표현식
var bar=function(a,b){
    return a*b;
};

console.log(foo(10,5));



var foo=function(a,b){
    return a*b;
};
//함수는 일급객체이기 때문에 변수에 할당할 수 있는데, 변수는 함수명이 아닌 할당된 함수를 가리키는 참조값을 저장
var bar = foo;

console.log(foo(10,10));
console.log(bar(10,10)); //함수 호출시 함수명이 아닌 함수를 가리키는 변수명을 사용해야 함
