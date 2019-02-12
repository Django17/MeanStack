function welcome(name) {

    var welcomeMsg = 'welcome ' + name + ' to brodway infosys nepal';

    function getName() {
        return welcomeMsg;
    }

    function setName(newMsg) {
        welcomeMsg = newMsg;

    }

    return {
        get: getName,
        set: setName
    };

}

var result = welcome('abc');

console.log('what comes out >>', result);
var getNameRes = result.get();

console.log('get name res', getNameRes);
var setName = result.set('hello and welcome');
console.log('value of setName>>', result.get());



