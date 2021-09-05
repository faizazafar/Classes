//variables

var myName = "faiza";
//var is global variable 
// let myyName = "faiza";
//let is block scope
//use let in for loops agr kisi or block me same variable assign hua wa ha to issue nh ayega
//global me let hua wa use variable andr scope se b access hojata ha but andr use hua wa let ka variable bahr se access nh hojata
// const institute = "Saims";

// console.log(myName);

var i = 100 ;
i = 100 +1;
console.log(i)
for (let i =0 ; i<5 ; i++)
{
    console.log(i)
}


//constant is immutable cannot be reassigned or redeclare

const pi = 3.14;
// pi = 4; 
var name1; // no error but if this is not there then error will come at line 31
{
    const name1 = "xyz"
    console.log(name1);
}

console.log(name1)


let x = 1;

if(x===1)
{
    let x = 2;
    console.log(x);
}

console.log(x);


let a 
a = 'faiza';
console.log(a);


let minage = 20;

function age()
{
    // let age = window.prompt("Enter your age: ");

    if (age < minage) {

        console.log('not applicable')

    }


}

age()

//it stores data in key value pair in client's local storage { " key " : "value" }

// localStorage.setItem("name", "faiza")
// localStorage.getItem("name")
// localStorage.removeItem("name")



// sessionStorage.setItem("name", "rabia")
// console.log(sessionStorage.getItem("name"))
//sessionStorage.removeItem("name")

let logininfo = {
    user: "faiza",
    isActive: true,
    role:"admin"
}

// sessionStorage.setItem("auth ", logininfo);
sessionStorage.setItem("auth ", JSON.stringify(logininfo)); //PARSING 
let myValue = JSON.parse(sessionStorage.getItem("auth"));
console.log(myValue);