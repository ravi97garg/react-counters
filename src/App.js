import React, { Component } from 'react';
import './App.css';
import Counter from "./Counter";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  constructor(numberOfCounters = 3){
    super();
    this.arr = [];
    for(let iter=1;  iter<=3; iter++){
      this.arr.push(iter);
    }
    let obj = {};
    this.arr.forEach((counterId) => {
      obj['count'+counterId] = 0;
    });
    this.state = obj;
  }
  incrementAll = () => {
    let newState = this.state;
    for(let counter in newState){
      newState[counter] = newState[counter]+1;
    }
    this.setState(newState)

  };
  decrementAll = () => {
    let newState = this.state;
    for(let counter in newState){
      newState[counter] = newState[counter]-1;
    }
    this.setState(newState)
  };
  increment = (id) => {
    this.setState({
          ['count'+id]: this.state['count'+id]+1
        }
    )
  };
  decrement = (id) => {
    this.setState({
          ['count'+id]: this.state['count'+id]-1
        }
    )
  };
  render() {
    // let arr = [1,2,3];
    return (
      <div>
        <Header/>
        <div className='Main'>
          <div className="center">
            <button onClick={this.incrementAll} className="big-btn">Increase All</button>
            <button onClick={this.decrementAll} className="big-btn">Decrease All</button>
          </div>
          {this.arr.map((item, i) => {return <Counter
              key={item}
              id={item}
              count={this.state['count'+item]}
              inc = {this.increment}
              dec = {this.decrement}
          ></Counter>})}
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
