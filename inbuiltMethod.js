// string

var str = '      Welcome to Brodway Infosys Nepal    ';
var upperCaseStr = str.toUpperCase();
var lowerCaseStr = str.toLowerCase();
var trim = str.trim();

console.log('uppercase >>', upperCaseStr);
console.log('lowercase >>', lowerCaseStr);
console.log('lenght >>', str.length);
console.log('trimed str >>', trim);
console.log('trimmed length >>', trim.length);

// string to array
// split is used to convert string into array
var hobbies = 'singing,dancing,coding,debugging,testing'
var splitArr = trim.split('Nepal');
console.log('split array >>', splitArr);


// number
var num = '444';
var num1 = Number('4555');
console.log('number is >>', num1);
var checkNaN = isNaN(num1);
console.log('check nan is ', checkNaN);

var float = 44.444444444;
console.log('int only >>>', parseInt(float));
console.log('toFixed >>', float.toFixed(2));

// object

var obj = {
    name: 'brodway',
    address: 'tinkune',
    phone: 4444,
    email: 'brodway@gmail.comu'
}
var nameExist = obj.hasOwnProperty('name');
console.log('name exist >>', nameExist);
//
// function test(a) {
//     if ('name' in a) {
//         console.log(' name exist in a');
//     }
// }
// test({
//     name: 'tinkune'
// });

// var stringObj = JSON.stringify(obj);
// console.log('string obj >>', JSON.stringify(obj));
// console.log('reversed obj >>', JSON.parse(stringObj));

// for (var key in obj) {
//     console.log('key is ', key);
//     console.log('value is ', obj[key])
// }


// var keyOnly = Object.keys(obj); // array with key onley
// var valueOnly = Object.values(obj); // array with value only
// console.log('key >>', keyOnly);
// console.log('value >>', valueOnly);
