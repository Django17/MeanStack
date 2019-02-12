// function makeAnOrder(item, cb) {
//     var kitchenOpen = false;
//     if (kitchenOpen) {
//         setTimeout(function () {
//             cb(null, 'coffee');

//         }, 2000)
//     } else {
//         cb('no-coffee');
//     }

// }

// makeAnOrder('coffee', function (err, done) {
//     if (err) {
//         console.log('error receiving order>>', err);
//     }
//     else {
//         console.log('order received>>', done);
//     }
// });


var myTask = require('./myTask');
console.log('file result >>', myTask);

//// task part ///////////////////
function callForNote(topic, cb) {
    console.log('friend received call and insit to callback after he find note');
    setTimeout(function () {
        console.log('2 hours taken to find note');
        cb(null, {
            pdfNote: topic
        })
    }, 2000);
}


function printNote(pdfNote, cb) {
    console.log('note received at stationary for printing');
    var electricity = true;
    if (electricity) {
        console.log('electricity availabel so proceed printing');
        setTimeout(function () {
            cb(null, 'printedNote')
        }, 2000);
    } else {
        console.log('cannot print note');
        cb('no-electricity');
    }
}

function entertainment(cb) {
    console.log('start watching movie');
    setTimeout(function () {
        console.log('movie completed');
        cb();
    }, 3000);
}


function servicing(cb) {
    console.log('bike servicing starts');
    setTimeout(function () {
        cb();
    }, 2000);
}

//// execution part/////////////////
/// preparation for exam
console.log('start preparation for exam');
console.log('call a friend for note');
myTask.call('mongodb', function (err, done) {
    if (err) {
        console.log('error getting note');
    } else {
        console.log('note received', done);
        console.log('note is in pdf so go for printing');
        myTask.print(done.pdfNote, function (err, done) {
            if (err) {
                console.log('errro in printing note', err);
            } else {
                console.log('success in priting note>>', done);
                console.log('want to watch movie');
                myTask.entertainment(function () {
                    console.log('enetertainment finished');
                    myTask.servicing(function () {
                        console.log('bike servicing completed');
                    });
                });
                console.log('it starts raining');
                console.log('mum arrives home');
            }
        });
        console.log(' meet friends');
        console.log('have coffee');
    }
});
console.log('clean room');
console.log('prepare pen pencils papers');
