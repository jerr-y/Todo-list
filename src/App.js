import React,{Component} from 'react';
import './App.css';
// import Counter from "./component/Counter";
import Forms from './component/Forms';



class App extends Component{
  state = {
    myString : "Hello"
  };
  render(){
    return(
      <div className="App">
      <h1>Events</h1> 
      {/* <Counter/> */}
      <Forms />
      </div>
    );
  }
}

export default App;
