var contactDetails = {
    permanentAddr: 'tinkune',
    tempAddr: 'bhaktapur',
    emailAddress: 'test@gmail.com',
    phone: 4848484,
    postalAddr: 'kldjf44'

}

var ram = {
    height: 44,
    weight: 445,
    address: 'maitidevi',
    phoneNo: 4444,
    class: 9,
    hobbies: ['singing', 'dancing', 'cycling']
}
ram.class = 10;
ram.house = 'green';
delete ram.address;
//accessing property of an object
// two notation
// 1.dot(.) notataion
// 2 bracket notation
// dot notation
console.log('value of ram >>>', ram.class);



// bracket notation
var getVal = 'phoneNo';
console.log('value of ram in bracket notation', ram[getVal]);

var fruits = ['apple', 'mango', 'grape'];

console.log('apple is ', fruits[0]);


///prmitive data type
// string, number,boolean ,undefined,null

// additonal data type
// array, object
///immutable property exists in primitive data type
var name = 33;
var name2 = name;
name = 'hello';
console.log('name is ', name); // brodway
console.log('name 2 is ', name2); // tinkune
//

//mutable property in array and object

var obj = {
    name: 'brodway',
    address: 'tinkune'
};

var obj2 = obj;
// obj2.name = 'brodway infosys nepal';
obj.color = 'red';
console.log('initial object is >>>', obj);//brodway tinkune
console.log('refrenced obj is >>', obj2);// brodway infosys nepal, tinkune

var fruits = ['aapple', 'orange', 'grape'];

var vegitables = fruits;
fruits[0] = 'pumpkin';
vegitables[3] = 'banana';
console.log('furits initial >>', fruits);

console.log('vegitables now >>', fruits);