var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male'
  };
  
  //for-in문: 객체에 포함된 모든 프로퍼티에 대해 루프 수행가능

 for (var prop in person){ //prop에 객체의 프로퍼티 이름이 반환됨
     console.log(prop + ':' + person[prop]);
    
 } 
 var array = ['one','two'];

 //index에 배열의 경우 인덱스가 반환됨
 for(var index in array){
     console.log(index + ':' + array[index]);
 }