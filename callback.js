// function welcome(name) {/// higher order function
//     console.log('what comes in ', name);
//     // return 'welcome ' + name + ' to brodway';
// }

// var a = function () { // callback function
//     console.log('i am inside a block ');
// };
// var result = welcome(a);
// console.log('result is >>', result);

// // higher order function funciton that accepts argument as an function is higher order function

// // callback function are those function that are passed as argument


// // task part
// function buyMobile(handSet, callback) {
//     console.log('i request daraz for phone');
//     // console.log('what comes in 1st ', handSet);
//     // console.log('what comes in 2nd ', callback);
//     setTimeout(function () {
//         callback('ok');
//     }, 2000);

// }

// //execution part
// var cb = function (data) {
//     console.log('i am called with data >>', data);
//     console.log('blocking work after buying mobile can be done');
// };
// // cb('samsung');

// buyMobile('poco', cb);
// console.log('go home');
// console.log('eat food');


function askForVideo(topic, cb) {
    console.log('a friend as for video');
    console.log('i told him to callback after i upload video to drive');
    console.log('video upload in progress');
    setTimeout(function () {
        console.log('video upload to drive finished');
        console.log('now callback to friend ');
        cb();
    }, 5000);
}



console.log('want to learn some JS');
askForVideo('closure', function () {
    console.log('callback result >>');
    console.log('now start watching video')
});
console.log('clean room');
console.log('wash clothes');

// task
// prepare a story to buy cycle
// askmoney with parent

// lets assume parent told to wait for some days untill salary arrives
// do your non-blocking task
// after your mum receive salary and she gives you money
// buy laptop 