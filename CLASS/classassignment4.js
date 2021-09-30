
//task1 iterating through for each
let cities = ['LA', 'new york', 'karachi','islamabad']
cities.forEach((val,i)=>{

    console.log(val)
})

//task1 through destructing
city=()=> ['LA', 'new york', 'karachi','islamabad']

let [ city1 , city2, city3 , city4 ] =city()

console.log(city1)
console.log(city2)
console.log(city3)
console.log(city4)

//task2
let student = {
    name :'faiza',
    age: 22,
    rollno :6453
}

let { name ,age, rollno} = student

console.log(name)
console.log(age)
console.log(rollno)

//task3
function n (a,b,c,d,e)
{
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)

}

let arr = [1,2,3,4,5]
n(arr[0], arr[1], arr[2], arr[3], arr[4])

// arr.forEach((val)=>{

//     n(val)
// })

//task4
let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
let lastNames = ['khan', 'ayub', 'aziz', 'yasin']

if (firstNames.length == lastNames.length){


   
    //  let newarray = firstNames[i].concat(lastNames[i])
    //  console.log(newarray)

    let a = firstNames.map((c,o)=>
    {
        return firstNames[o].concat(lastNames[o])
    
    })

    console.log(a)

}

//task5
let array = [1,2,3,4,5]
let b = array.map((i)=>i*2)
console.log(`after double is ${b}`)


///task6


func1=(num1)=>Math.pow(num1,2)

console.log(`after square is ${func1(4)}`)

//task7
var authenticated=true;
var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed'))

//answer : you r allowed will run

//task8
var ageee = 12;
var canDrive = ageee > 18 ? 'yes' : 'no';
console.log(canDrive)

//answer : no

//task9
const dog='snickers'
logdog(dog);
function logdog(dog){
console.log(dog)
        }
function go(){
const dog='sunny';
logdog(dog)
         }
//answer: snickers

//task10

let text= `He's often called "Johnny"`;
console.log(text)// answer : He's often called "Johnny"

//task11
function welcomeMsg(name = "Everyone") {
    let msg = "Welcome " + name
    console.log(msg)
}
welcomeMsg("Faiza")
welcomeMsg()

//answer: 
//Welcome Faiza
//Welcome Everyone

//task 12
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolve');
    }, 5000);
  });


myPromise
   .then(res=> console.log(res))
   .catch(err=> console.log(err))
