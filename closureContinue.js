function welcome(name) {
    var greetText = 'hi';

    function hello(loc) {
        function test() {

            return greetText + ', ' + name + ' welcome to ' + loc;
        }
        return test;
    }

    function hello2() {

    }

    var innerRes = hello;
    return {
        a: hello,
        b: hello2,
        c:[]
    }


}

var res = welcome('ram')
console.log('checkin res', res);
// var callInnerFn = res('bhaktapur')
// console.log('result is >>', callInnerFn);

