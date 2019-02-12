//// task part ///////////////////
function callForNote(topic) {
    return new Promise(function (resolve, reject) {
        console.log('friend received call and insit to callback after he find note');
        setTimeout(function () {
            console.log('2 hours taken to find note');
            resolve({
                pdfNote: topic
            })
        }, 2000);
    })

}


function printNote(pdfNote) {
    return new Promise(function (resolve, reject) {
        console.log('note received at stationary for printing');
        var electricity = true;
        if (electricity) {
            console.log('electricity availabel so proceed printing');
            setTimeout(function () {
                resolve('printedNote')
            }, 2000);
        } else {
            console.log('cannot print note');
            reject('no-electricity');
        }
    });
}

function entertainment() {
    return new Promise(function (resolve, reject) {
        console.log('start watching movie');
        setTimeout(function () {
            console.log('movie completed');
            reject('internet issue');
        }, 3000);
    })

}


function servicing() {
    return new Promise(function (resolve, reject) {
        console.log('bike servicing starts');
        setTimeout(function () {
            resolve();
        }, 2000);
    })

}

//// execution part/////////////////
/// preparation for exam
// console.log('start preparation for exam');
// console.log('call a friend for note');
// callForNote('mongodb', function (err, done) {
//     if (err) {
//         console.log('error getting note');
//     } else {
//         console.log('note received', done);
//         console.log('note is in pdf so go for printing');
//         printNote(done.pdfNote, function (err, done) {
//             if (err) {
//                 console.log('errro in printing note', err);
//             } else {
//                 console.log('success in priting note>>', done);
//                 console.log('want to watch movie');
//                 entertainment(function () {
//                     console.log('enetertainment finished');
//                     servicing(function () {
//                         console.log('bike servicing completed');
//                     });
//                 });
//                 console.log('it starts raining');
//                 console.log('mum arrives home');
//             }
//         });
//         console.log(' meet friends');
//         console.log('have coffee');
//     }
// });
// console.log('clean room');
// console.log('prepare pen pencils papers');


console.log('start preparation for exam');
console.log('call a friend for note');
callForNote('express')
    .then(function (data) {
        //result of callforNote
        console.log('note received', data);
        console.log('note is in pdf so go for printing');
        return printNote(data.pdfNote);
    })
    .then(function (data) {
        // result of printNote
        return servicing();
    })
    .then(function (data) {
        // successof sevicing
        return entertainment();
    })
    .then(function (data) {
        // success of entertainment
        console.log('enterntainment finsihed');
    })
    .catch(function (err) {
        console.log('err is ', err);
    })
    .finally(function () {
        console.log('promise settld');
    });


