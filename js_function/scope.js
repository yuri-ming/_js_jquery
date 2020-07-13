//유효범위: 변수의 수명 의미

var vscope='global';
function fscope(){
    console.log(vscope); 
}
fscope();  //global 출력, 함수 바깥에 있는 변수 vscope에 접근 (전역변수)

var vscope='global';
function fscope(){
    var vscope='local';
    console.log(vscope); 
}
fscope();  //local 출력, 함수 안에 vscope가 선언되어있음->자기자신에게 가까운쪽을 가르킴! (지역변수)
//지역변수 -> 함수 {}내에서 선언된 변수

var vscope='global';
function fscope(){
    var vscope='local';
    var lv ='local variables';
    console.log(lv); //lv는 지역변수
}
fscope();  //fscope함수 호출, lv 변수는 함수 안에서 만들어짐
console.log(lv);  //함수 바깥에서 lv 호출시, undefined!