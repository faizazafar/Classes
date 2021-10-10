import './App.css'

const App =()=>{
let a  = 10;
let b = " students"
// let arr = [1,2,3,4]
// let cities = ["khi","lahore","isl"]
let stu = ["faiza","rida","masooma"]



  return(
    <div className="App">

      <h1> React first class</h1>
      <h3>{`no of ${b} are ${a}`}</h3>
      <ul>
        {
          stu.map((st)=>(

            // <li className="array"> {st} </li>
            <table>
              <th>
                <td className="array">
                  {st}

                </td>
              </th>
              </table>

          ))
        }
      </ul>
    </div>
  )
}

export default App

//jb html k andr dobara js chahye ho to { } isme likhty
//student k nam se array

//2 tarah k imp hoty ik default ot ik specific
//state is current comp value aur jo chez aarhi kahein se wo parent comp se aati jise hum prop kehty 
//we cannot change parent state but can use only
//flow is top to bottom
