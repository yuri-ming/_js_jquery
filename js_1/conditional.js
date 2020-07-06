var num = 2;
var kind;

if(num>0) {
    kind='양수';
}
console.log(kind);

if(num>0){
    kind='양수';

} else{
    kind='음수';
}
console.log(kind);

if(num>0){
    kind='양수';
} else if (num<0){
    kind='음수';
} else{
    kind='영';
}
console.log(kind);

var kind=num ? (num>0 ? '양수' : '음수') : '영';
console.log(kind);