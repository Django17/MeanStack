// function
// function is a reusualbe block of code performing specfic task

// syntax
// function (){ //function declartaion

// }

// welcome();// call garne tarika

// var abc;
// abc = 'stringsdklfjsdlfjkl';
// abc = 333;
// abc = true;
// abc = function(){

// }


// console.log('value of abc >>', abc);

// type of fucntion declaration

// declaration syntax
// function fn_name() {

// }

// // expression syntax
// var ram = function () {

// }



// welcome();
// function welcome() {
//     console.log('welcome to brodway');
// }

// var sayHello;
// // sayHello();

// var sayHello = function () {
//     console.log('hello to brodway');
// }

//Hoisting 
// Hoisting is a mechanism to move all the declaration at top before executing file



// type of function

// 1 named function
// eg 
// function welcome() {
//     console.log('hello i am called');
// }

// welcome();

// 2 unnamed function // ananymous function

// IIFE immediately invoked function expression
// (function(){

// })()
// (function() {
//     console.log('i am function without any name');
// })();
// functio with argument

// function welcome(name) {
//     console.log('what comes in  >>', name);
//     console.log('welcome ', name.name, ' to brodway');
// }
// welcome({ name: 'broadway' });

// JAVASCRIPT is loosely typed programming language

// function with multiple argument
function sendMail(receiverEmail, subject, msgBody, replyTo) {

    console.log('to >', receiverEmail);
    console.log('subject is ', subject);
    console.log('message body <>>', msgBody);

}
var ram = sendMail('test@gmail.com', 'welcome', 'hello and welcome to brodway');
var shyam = sendMail('shyam@gmail.com', null, 'you are welcome to brodway');

function sendMessage(details) {
    console.log('details is ', details);
}

sendMessage({
    sender: 'ram',
    receiver: 'shyam',
    receiverEmail: 'test@gmail.com',
    subject: 'hello',
    message: 'hello and welcome to brodway',
    replyTo: 'abc@gmail.com'
});

// function with argument return type

function getNote(note) {
    console.log('what comes in >>', note); // undefined
    // JAVASCRIPT is loosely typed programming language
    return {
        name: 'brodway',
        address: 'tinkune'
    }


}
var result = getNote('javascript');
console.log('result is >>', result);
