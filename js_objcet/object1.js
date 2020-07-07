//객체 리터럴
var emptyObject = {};
console.log(typeof emptyObject);

var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function () {
      console.log('Hi! My name is ' + this.name);
    }
  };
  
  console.log(typeof person); // object
  console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}
  
  person.sayHello()


  //Object 생성자 함수
  var person = new Object();

  person.name= 'Lee';
  person.gender='male';
  person.sayHello=function(){
      console.log('Hi! My name is '+ this.name);
  };

  console.log(typeof person);
  console.log(person);

  person.sayHello();

 
// 생성자 함수
function Person(name, gender) {  //대문자로 시작하는 생성자 함수
    this.name = name;   //프로퍼티 또는 메소드명 앞에 기술한 this는 생성자 함수가 생성할 인스턴스를 가르킴
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