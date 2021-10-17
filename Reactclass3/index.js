import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import First from './components/First';
import Main from './components/Main';
import Headerclass from './components/Headerclass';
import Hifullname from './components/Hifullname';
import Mediacard from './components/Mediacard';
import pic from './flower.jpg'
import Gate from './components/Gate';

// import Sec from './components/Second';
// import Third from './components/Third';



ReactDOM.render(
  <React.StrictMode>
{/* <App name="faiza" email ="faiza@gmail.com" rollno={89}></App>
<App name="sara" email ="sara@gmail.com"></App> */}
{/* <Hifullname firstname="Faiza" lastname="zafar"></Hifullname> */}
{/* <App></App> */}
{/* <Mediacard title="I am title" body={(<div>this is my <b>body</b> text</div>)}img ={pic}></Mediacard> */}

<Gate cond = {true}></Gate>

  </React.StrictMode>,
  document.getElementById('root')
);

// parent is index.js and App.js is child jisme parent ka prop jarha prop me bolean and objects b bhjyjaskty
// {{}}
reportWebVitals();
