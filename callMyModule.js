// import from another file
// syntax
// es5
var resultOfModule = require('./myModule');
var callModule = resultOfModule({
    name: 'broday',
    address: 'tinkune'
});

callModule.connect();
callModule.insert();


// es6 
// import resultOfModule from 'path to destination fiel'