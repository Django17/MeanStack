"use strict";

// // scope is accessibility or visibility of variables and constant

// // type of scope
// // global scope // globally accesible values(variable constant functions)
// // functional scope // accessible within local functions
// // block scope // accessible with same block
// // var / let es5/es6


// var hi = 'hello and welcome to brodway'; // global vairable

// function welcome() {
//     // functiaonal scope
//     var hi = 'hello inside welcome';
//     var text = 'brodway';
//     console.log('valu of hi in welcome >>', hi);
// }
// welcome();

// function sayHello() {
//     var hi = 'hello inside say hello';
//     // console.log('value of text in sayhello', text);
// }
// sayHello();

// // console.log('valu of text at outmost level', text);

// // try accessing everything if accessed it is within scope
// // if not it is out of scope


// let hello = 'hello';
// function greeting(name) {
//     if (name) {
//         let hello = 'hi';
//         console.log(hello + ' ' + name + ' welcome to brodway');
//     } else {
//         let hello = 'welcome';
//         console.log(hello + '  to brodway');
//     }

//     console.log('outside if-else blcok ')
//     console.log('value of hello ', hello); // welcome//hi
// }
// greeting();
// {}
// // let maintains block scope// var doesnot maintain block scope
var test = 'testing scope';

function testing() {

    var test = 'testing scope inside function';
    var test2 = 'testing new data in functional scope';
    // variables declared without using var key word are global variables
}

function done() {
    var test2 = 'hello';
}
// testing();
done();
console.log('value of test2', test2); // 

console.log('value of test', test); // 