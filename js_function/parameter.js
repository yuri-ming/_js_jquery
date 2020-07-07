//call by value
function foo(primitive){
    primitive += 1;
    return primitive;
}
var x =0;

console.log(foo(x));
console.log(x);

//call by reference
function changeVal(primitive,obj){  
    primitive += 100;  //원시타입인수는 값을 복사하여 매개변수에 전달
    obj.name ='Kim';
    obj.gender='female';
}

var num=100;
var obj={
    name:'Lee',
    gender:'male'
};

console.log(num);
console.log(obj);

changeVal(num,obj); //원시타입과 객체타입 인수를 전달받아 함수 몸체에서 매개변수의 값 변경

console.log(num);  //원시타입에 대한 연산은 변화 없음
console.log(obj);  //참조값을 직접 매개변수에 전달->함수 몸체에서 그 값이 변경됨