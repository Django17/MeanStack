var fruits = ['apple', 'banana', 'apple', 'banana', 'kiwi', 'strawberry', 'banana', 'kiwi', 'strawberry', 'banana', 'apple', 'banana', 'apple', 'banana', 'kiwi', 'strawberry', 'banana', 'kiwi', 'strawberry', 'banana'];

console.log('lenght of array >>', fruits.length);
// adding element to array
// first 
// last
fruits.push('orange');
fruits.unshift('mango');
console.log('fruits now >>', fruits);
//index of array
// indexOf always check for index of first occruing
console.log('index of banana >>', fruits.indexOf('banana'));
console.log('last index of banana >>', fruits.lastIndexOf('apple'));

// removig element from array
// first or last
// first 
// var firstItem = fruits.shift();
// console.log('first item is >>', firstItem);
// console.log('fruits after shift >>>', fruits);
// last
// var lastItem = fruits.pop();
// console.log('last item is >>', lastItem);

console.log('after pop >>', fruits);

//splice method is used to add/remove element in array
// adding using splice
// var indexOfKiwi = fruits.indexOf('kiwi');
// fruits.splice(1, 0, 'guava', 'pineapple');
// remove using splice
// fruits.splice(indexOfKiwi, 3,'ram','shyam');
// console.log('fruits after splice  remove >>', fruits);


//loop in array
// forEach
// filter
// map
// reduce
// every
// some
// 

// fruits.forEach(function (item, index) {
//     console.log('item is >>', item);
//     console.log('item Index is >>', index);
// });

var cycles = [
    {
        name: 'giant',
        gear: '24',
        body: 'aluminium',
        price: 444,
        color: 'white',
        type: 'up-hill'
    },
    {
        name: 'trek',
        gear: '27',
        body: 'aluminium',
        price: 500,
        color: 'red',
        type: 'down-hill'
    },
    {
        name: 'hero',
        body: 'iron',
        price: 100,
        color: 'green',
        type: 'normal'
    },
    {
        name: 'kona',
        gear: '27',
        body: 'silicon',
        price: 1200,
        color: 'orange',
        type: 'down-hill'
    },
    {
        name: 'honey hunter',
        gear: '24',
        body: 'aluminium',
        price: 300,
        color: 'red',
        type: 'up-hill'
    }
]

cycles.forEach(function (item) {
    item.status = 'availabel';
})

var downHillCycle = cycles.filter(function (item) {
    if (item.type === 'down-hill') {
        return item;
    }
});
console.log('downhill Cycle >>', downHillCycle);

var upHillCycle = cycles.filter(function (item) {
    if (item.type === 'up-hill') {
        return item;
    }
});
console.log('upHill Cycle >>', upHillCycle);

var downHillWith27 = downHillCycle.filter(function (item) {
    var gear = Number(item.gear);
    if (gear >= 27) {
        return true;
    }
});
console.log('downhill with 27 gear cycle >>', downHillWith27);
var redColorCycle = downHillWith27.filter((item) => {
    if (item.color == 'red') {
        return true;
    }
});
console.log('red color cycle >>', redColorCycle[0]);

cycles.map(function (item) {

    if (item.type == 'down-hill' && Number(item.gear) >= 27 && item.color == 'red') {
        return item.status = 'sold';
    }
});
console.log('final cycle array >>', cycles);
cycles.forEach(function (item, index) {
    if (item.status == 'sold') {
        cycles.splice(index, 1);
    }
});
console.log('final array of cycle after removing >>', cycles);