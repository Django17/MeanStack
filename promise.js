//promise is an object that represents future value
// promise has 3 state
// 1 pending
// onFulfilled
// onRejection
//if fullfilled or rejected promise will be setteled.

// we have 3 methods
// then ==> sucess and failure
// catch ==> failure only
// finally ==> either success or failure finally method will execute.

// syntax
var a;
a = '';
a = 4;
a = true;
a = new Promise(function (resolve, reject) { // initital onPending
    setTimeout(function () {
        reject(2);// if succcess (onFullfilled) if failure(onRejected)
    }, 5000);
});

//using promise method
var b = function (data) {
    console.log('b function called', data);
}
var c = function (err) {
    console.log('catch function called >', err);
}
a
    .then(function (data) {
        console.log('success')
    }, function () {
        console.log('falure')
    })
    .catch(c)
    .finally(function () {
        console.log('promise setteld');
    });

var obj = {
    title: 'sdklfjdl',
    name: 'bipin',
    body: 'hello and welcome',
    subject: 'forgot password',
    replyTo: 'test@test.com'
};

// var { title } = obj;
// console.log('title is >>', title);
function sendMail({ name, subject, replyTo }) { // object destructure
    console.log('name >>', name);
    console.log('subject >>', subject);
    console.log('replyTo >>', replyTo);
    var res = new Promise(function (resolve, reject) {
        // sending mail task

        setTimeout(function () {
            resolve();
        }, 2000);
    });

    return res;
}

// var sendMailRes = sendMail({});
// sendMailRes.then()
var name = 'bipin';
var subject = 'forgot password';
var replyTo = 'test@test.com';
var body = 'hello and welcome';
var title = 'sdklfjdl';

var a = { title, name, body, subject, replyTo };// object shorthand



sendMail(a)
    .then(function (done) {

    })
    .catch(function (err) {

    })
    .finally(function () {

    });



