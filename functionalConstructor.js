
// console.log('this is global >>', this);
// this.name = 'hi';
// function Fruits() {
//     console.log('this is inside constructor >>', this);
//     this.name = 'apple';
//     this.orgin = 'mustang';
// }

// Fruits.prototype.color = 'red';
// Fruits.prototype.getOrigin = function () {
//     return this;
// }
// // prototype is a keyword which is used to add property and methods in functional constructor
// var apple = new Fruits();
// console.log('apple is >>', apple);
// console.log('apple is >>', apple.getOrigin());


// // var a = new Array();

// // function Array() {

// // }

// // Array.prototype.length = 'actions';
// // Array.prototype.push = function (item) {
// //     // 'actions'
// // }
// Array.prototype.nepal = ' form nepal';

// // a.push('b');
// // console.log('a >>', a.length);


// var newArr = new Array();
// console.log('newArr.nepal is >>', newArr.nepal);

function Vegitables(name, color) {

}
Vegitables.prototype.calories = function (val) {
    return {
        calories: val
    }
}
Vegitables.prototype.fat = function () {
    return this.calories(55);
}


var potato = new Vegitables('potato', 'red');
console.log('potato is >>', potato.fat());


var pumpkin = new Vegitables();
console.log('pumpkin is >>', pumpkin.color);

function Fruits() {


}

Fruits.prototype.color = 'yellow';
Fruits.prototype = new Vegitables(); // inheritance vegitables is parent fruits is child


var apple = new Fruits();
console.log('value of apple is >>', apple.fat());