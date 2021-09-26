//array func (foreach , map ,find, filter , some , reduce)
//print array with for each
//convert lower case names array in sentence case
//convert number array into new array


const num = [1,2,3,5]
let newnum = num.map((val,ind)=>{

    return val * 2

})

console.log(newnum)

//map new array me save krta after calculation

const names = ['faiza']

let newName = names.map((name,i)=>{

    return name[0].toUpperCase() + name.slice(1)
})

console.log(newName);

newName.forEach((val)=>{

    console.log(val)
})

// const mystudent = [
    
//     { id:1 , name: 'aaa' , age: 15 , fees:`no`},
//     { id:2 , name: 'aa' , age: 12, fees:'yes'},
//     { id:3 , name: 'aa' , age: 11, fees:`no`}

// ]

const myStudent = [
    { id: 1, name: "aaa", age: 15, fees:'yes' },
    { id: 2, name: "bbb", age: 16, fees:`yes`},
    { id: 3, name: "ccc", age: 18, fees:`no`},
    { id: 4, name: "ddd", age: 22, fees:`yes`},
    { id: 5, name: "zzz", age: 12, fees:`no`},
    { id: 6, name: "yyy", age: 12, fees:`no`},
]



let record = myStudent.find((a)=>{
    return a.age>=14
})

console.log(record)

myStudent.forEach((val)=>{

    console.log(`my name is ${val.name} age is ${val.age} fees submitted is ${val.fees}`)
})

let re = myStudent.filter((a)=>{
    return a.fees == `no`
})

console.log(re)

//jb kisi method me arrow func use krte tou usse call back kehty
//shift alt se ik dam copy hojaega sary 
//find srf ik particular record lata and array m return nh krta whereas filter sary le  aaty

let arr =[1,3,7]
let newarr = arr.some((a)=>{
    return a%2 == 0
})

console.log(newarr)

//some and every boolean return krte

//arow func taking 1 argument and returning it 
let double  = i => i*2
console.log(double(3))


firstname = ['faiza']
lastname = ['zafar']




//to print in good format we use for each
//map ki values ap kisi new array m save krskty
let namesss = myStudent.map((i)=>{

   return { name : i.name , age : i.age} //returning object

})

console.log(namesss)


let newST = myStudent.filter(a=>a.fees=='no'&& a.age >14)
console.log(newST)

//promise

//promise resolved or rejected
//koi esa kaam jo async ho promise k andr sary sync waly kaam rakhty

//promise phly declare kia jata ha phr call kia jata promise is an object
// let a = 8;
// let myPromise = new Promise((resolve, reject)=>{

//     if (a==10){

//         resolve('yaho');
//         // resolve({name:'yaho'});

//     }else{
//         reject('oho');
//     }
// });

// myPromise
//    .then(res=> console.log(res))
//    .catch(err=> console.log(err))

let agee = 20;
let myPromise = new Promise((resolve, reject)=>{

    if (agee>=18){

        resolve('you are allowed');
        // resolve({name:'yaho'});

    }else{
        reject('not allowed');
    }
});

myPromise
   .then(res=> console.log(res))
   .catch(err=> console.log(err))

//without load refresh hue data new ana is due to react e.g fb , gmail
//react is a library of js angular is frame work
//do onw thing in one function in react 2 small functions bnaye and onw big func m call krleiin known as compositional model
//js is imperative ( ap btaty hain ) react is declarative like map in js
//ik hi flow me data load hota 
//js and html  mix is known as JSX JAVASCRIPT XML
//REACT HAS CPMPONETS ( CHUNKS )
//program ki halat state state is stored data like var , aray state is current component value
//prop is parent component value 