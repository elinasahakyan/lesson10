/* alert('hi') */

var a = ['*', '* *', '* * *',
    '* * * *', '* * * * *'
]
for (i = 0; i < 5; i++)
    document.write(a[i] + "<br/>");

//----------------------------

/* SimpleDateFormat sdf = new SimpleDateFormat("dd/M/yyyy");
String date = sdf.format(new Date());
System.out.println(date); //15/10/2013 */


//-----
/*var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyy = today.getFullYear();
for (i = 0; i < 10 || k = 0; k < 10) { document.write("<b>" + '0' + dd[i] + "/" + '0' + mm[k] + "/" + yyy + "</b>") };
for (i = 10; i < 32 || k = 10; k < 32) { document.write("<b>" + dd[i] + "/" + mm[k] + "/" + yyy + "</b>") };*/


// Heterogeneous arrays-----------------------------------------

var myArray = [13, true, "life"];

//Arrays of arrays

/* var newArray = [
    [
        [1],
        [2],
        [3]
    ]
    [
        [1],
        [2],
        [3]
    ]
    [
        [1],
        [2],
        [3]
    ]
];
console.log(newArray[010]);*/

// jagged arrays

var jagged = [
    [
        [1],
        [2],
        ['string']
    ],
    [true],
    [13]
];




//----------------------

/* var user = {
    name: 'Hayk',
    age: '24',
}
document.write(user.name + '<br/>' + user.age);

user.isAdmin = true;
user.surname = 'Barseghyan';
if (user.isAdmin) {
    alert("admin");
} else {
    alert('not admin');
}
console.log(user.name); */

//-----------------------------

var person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue'
};

console.log(person);
console.log(person.lastName);

///// or the same in other way

var person = new Object();

person.firstName = 'John';
person.lastName = 'Doe';
person.age = 28;


console.log(person.firstName);
document.write(person.age + "<br/>");

person.firstName = 'Lisa',
    person.lastName = 'Manukyan',

    document.write(person.firstName + ' ' + person.lastName + "<br/>");

//----------------------------------------
var book = new Object();
book.subject = "JS ROCKS!";
book.author = "No Idea";

console.log("Book's name is:" + book.subject);

//-------------------------------------
var testObj = {
    "for Starers": "salad",
    "my drink": "slurpy",
    "devine desert": "nutella",

};

testObj["check please"] = "whatever"

console.log(testObj['my drink']);
console.log(testObj);


var firstOrder = testObj['for starters'];
var secOrder = testObj['my drink'];

console.log(secOrder);