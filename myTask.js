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

module.exports = {
    call: callForNote,
    print: printNote,
    entertainment: entertainment,
    servicing: servicing
}