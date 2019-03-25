import React, {Component} from  'react'
import './Counter.css'

class Counter extends Component{
    state = {
        id: this.props.id
    }
    increase = () => {
        this.props.inc(this.state.id);
    }
    decrease = () => {
        this.props.dec(this.state.id);
    }
    render(){
        return (
            <div className="Counter clearfix">
                <button onClick={this.decrease} className="btn-left">-</button>
                <span>{this.props.count}</span>
                <button onClick={this.increase} className="btn-right">+</button>
            </div>
        )
    }
}

export default Counter;