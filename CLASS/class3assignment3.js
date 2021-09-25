//task 1
let num = 0

function counter()
{
    num++
    console.log(num)

}

setInterval(counter,1000)

//task2

function name( n)
{
   console.log(`hello ${n}` )
}

name('Faiza')

takename=(name)=>{

    console.log(`Hello ${name}`)
}

takename('Faiza')

//task3

sum=(n1,n2)=>n1+n2

    // console.log(`Sum is ${n1+n2}`)

let sumnumber = sum(2,4)
console.log(`sum is ${sumnumber}`)

//task4

func1=(num1)=>num1*0.5

console.log(`after multiply is ${func1(4)}`)

//task5
let array = [1,2,3,4,5]
let b = array.map((i)=>i)
console.log(b)

//task6

let arr = [ {id:1,name:"abc"},
            {id:2,name:"efg"},
            {id:3,name:"hij"},
            {id:4,name:"xyz"}]

arr.map((c)=>{

    console.log(`id is ${c.id}`)
    console.log(`name is ${c.name}`)

})

arr.map((c)=>console.log(c))