var person={
    name: 'Lee',
    gender:'male',
    sayHello:function(){
        console.log('Hi! My name is '+ this.name);
    }
};

console.log(typeof person); //person의 타입은 object
console.log(person); 

person.sayHello();