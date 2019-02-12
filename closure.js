var text = 'welcome';
function greet(name) {
    var to = 'to';
    function greeting(addr) {
        var test = ' scope of greeting';
        function hello() {
            var innerVar = 'scope of hello';
        }
        return text + ' ' + name + ' ' + to + ' ' + addr;
    }
    function hi() {
        console.log('i am hi');
    }
    var innerRes = greeting('tinkune');
    console.log('inner result is >>>', innerRes);
}


var result = greet('ram');
console.log('result >>>', greeting());

// a closure is an inner function that has access to
// 1 global scope
// 2 parent function argument
// 3 parent function scope
// 4 own function argument
// 5 own function scope