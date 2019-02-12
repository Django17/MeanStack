
module.exports = function (arg) {
    console.log('what comes in', arg);
    var fruits = ['apple', 'mango', 'banana'];

    var vegitables = ['potato', 'pumpkin', 'tomato'];

    var bikes = ['honda', 'suzuki', 'bajaj'];

    var student = {
        name: 'ram',
        class: 5
    }

    return {
        fruit: fruits,
        veg: vegitables,
        bike: bikes,
        a: function () {

        }
    }
}


// export from this module
// es6 export/exports
// syntax es5
// module.exports = {
//     fruit: fruits,
//     veg: vegitables,
//     bike: bikes,
//     a: function () {

//     }
// };
