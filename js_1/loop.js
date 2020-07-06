for(var i=0;i<2;i++){
    console.log(i);
}  //0 1

var count=0;
while(count<3){
    console.log(count);
    count ++;
} //0 1 2

var count=0;
//무한루프
while(true){
    console.log(count);
    count ++;

    //count가 3이면 코드블록 탈출
    if(count==3) break;
} //0 1 2


var count =0;

do {
    console.log(count);
    count++;
} while(count<3);


//foo라는 레이블 식별자가 붙은 레이블 문
//레이블문: 식별자가 붙은 문
foo: console.log('foo');


foo:{
    console.log(1);
    break foo; //레이블문 탈출하려면 break문에 레이블 식별자를 지정
    console.log(2);
}
console.log('Done!');


