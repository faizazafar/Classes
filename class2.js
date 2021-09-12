///TEMPLATE LITERALS, scope
///destructing
//var hoisting

//--destructring

const car = ['corola', 'civic', 'alto', 'mehran']

let [car1, car2, car3]= car
// let [car1, car2, car3]= ['corola', 'civic', 'alto', 'mehran']

console.log(car1)
console.log(car2)
console.log(car3)
// console.log(car4) ref error

let myyobj = {

    name :'faiza',
    age :"22",
    qualification:"bachelors"
}
let { name , age , qualification }= myyobj
// alert(name+" " +age+" " +qualification)
document.write()

alert(`my name is ${name} age is ${age} and qual is ${qualification}`)
// console.log(`my name is ${name} age is ${age} and qual is ${qualification}`)  //template literal

// alert(`my name is ${name} age is ${age} 
// and qual is ${qualification}`)

// let gender = "male"
// let role = "teacher"

// let val = (gender=="male" && role == "teacher") ? " allowed" : " not allowed"
// console.log(val)

// var gen = window.prompt("Enter your gender ");
// let val2 =(gen == "female" || gen =="Female") ? " your fav color is pink" : (gen =="male" || gen =="Male") ? "your fav color is blue"
// : " your fav color is purple"
// console.log(val2)

let member = prompt("Enter member ");

function fee(member)

{

    return member == true ? 'your fees is 4000' : "your fees is 6000"

}

let a= fee(member)
console.log(a)


// let a = [1,2]
// let b = [3,4]
// let c = a // refernce same h when c wil b changed a will also be changed
// let c = [...a] // ab reference change nh hoga known as spread operator
// let c = [...a,...b] // ab a and b dono aagye
// console.log(c[0])
// c[0] =2
// console.log(a)
// let [st1 , st2 , ...rest] = ST

let old = ['faiza' , 'naheed']

let neww = ['nashrah', 'iqra']

let total = [...old,...neww]

console.log(total)

//hoisting me initialzation upr nh jati only declare jata 