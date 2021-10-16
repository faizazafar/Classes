import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export class Stateclass extends Component {

    state = {counter:0};
    addemp =()=>{
        
        this.setState({counter:this.state.counter+1});
    }
    render() {
        return (
            <div>
                <h2>hello I am class component</h2>
                <p><button
                onClick={this.addemp}>Add Employee



                </button>
                </p>
       
                <p>
            <label>add employee button is clicked:
                <b>{this.state.counter}</b>
            </label>
                </p>
            </div>
        )
    }
}
const ele =<Stateclass></Stateclass>

ReactDOM.render(ele,document.getElementById("root"))