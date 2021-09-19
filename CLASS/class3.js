//ctrl b side bar k lye , ctrl shift ` terminal open , ctrl p to search file

//set intervals , settimeout. arrow function . default values , map  , map of object

// let seconds = +prompt("Enter your seconds"); //+will take in number ot string

// let milsec = seconds*1000


// function takearray()
// {


//     let a = [1,2,3,4]
//     console.log(a)

// }


// setTimeout(takearray, milsec)

timtaken=()=> {

    console.log(new Date ())
}

timtaken();


myfunc= (number) => {
    number++
    console.log(number)
}

let num = 0
myfunc(num)

myfunc1=()=> 2+2
let a = myfunc1()
console.log(a)

myfunc12=()=> [1,2,3,4]
let arr= myfunc12()
console.log(arr)


myfunc3=()=> myobj = {
    name : 'faiza',
    age : 22
}

let object = myfunc3()
console.log(object)


let records = [
  {id: 1 , name : 'faiza' , fname : 'zafar' , qual : 'matric'},
  {id: 2,name : 'rida' , fname : 'zafar' , qual : 'BS'},
  {id: 3,name : 'nida' , fname : 'zafar' , qual : 'inter'},
  {id: 4,name : 'shazia' , fname : 'zafar' , qual : 'BS'}
]



// for ( let a = 0 ; a < records.length ; a++)
// {
//    if(records[a].qual=='BS')
// {
//     console.log(records[a].name)
// }


// }

let array = [2,4,6,8]
let b = array.map((i)=>i+1)
console.log(b)
// let b = array.map((i)=>++i)

// let str = ['faiza', 'zafar']
// let c = str.map()

let numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.map((c)=>console.log(c))
let odd = [1,3,5,7]
odd.map((c)=>console.log(c))
records.map((c)=>{
    if(c.qual=="BS")
    {
        console.log(c.name)
    }
})

