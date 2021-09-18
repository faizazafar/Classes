//task1
function name ()
{

    return ['faiza' , 'zafar']
}

let [ firstname , lastname ] = name()
console.log(firstname)
console.log(lastname)

//task2

let car = {
    model:'toyoyta',
    year: 1942,
    color: 'white'
}

let { model , year, color} = car

console.log(model)
console.log(year)
console.log(color)

//task3
let myname = 'faiza'
let greet = 'hello'

console.log(`${greet} my name is ${myname}`)  //template literal

var speed = window.prompt("Enter your gender ");

let val = (speed >  120 ) ? 'car speed is fast' : (speed < 80) ? ' car is slow ': 'car is moderate'
console.log(val)

let a = [1,2,3,4,5,6,7,8,9,10]

let [ num1 , num2 , ...rest] = a
console.log(num1)
console.log(num2)
console.log(rest)