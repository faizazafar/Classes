import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Counterdisplay } from './Counterdisplay';
import { CounterInput } from './CounterInput';
function App() {
  // const [ counter , setcounter ]= useState(0)
  return (
    <div>
   

      {/* <Counterdisplay counter={counter} ></Counterdisplay>
     <CounterInput setcounter={setcounter} counter></CounterInput> */}
     <Counterdisplay></Counterdisplay>
     <CounterInput></CounterInput>
  
      {/* redux is state managemennt tool sb store me rkh dein wrna ik comp se dosre comp or phr teesre me jana
      will create rendering of those comp as well which is not reuqired */}
      {/* provider , store , reducer : store me direct change nh krskty reducer k through hoga,
      hr comp me dispatch call hota  
      if app is complex and big we sue redux */}
      {/* git checkout -b  */}
      {/* user->dispatch->reducer-> */}
  
    </div>
  );
}

export default App;
