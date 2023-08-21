function Animal(name){
    this.name = name;
}
Animal.prototype.sayHello = function(){
    console.log(`Hello, Im ${this.name}`);
};
function Cat(name){
    Animal.call(this, name);
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
const cat = new Cat('Whiskers');
cat.sayHello();