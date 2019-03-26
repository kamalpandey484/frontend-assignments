import React, {Component} from 'react';

class Counter extends Component{
    render() {
        return(
                <section>
                    <button onClick={this.props.dec} className='dec-btn'>-</button>
                    <span className='counter-area'>{this.props.num}</span>
                    <button onClick={this.props.inc} className='inc-btn'>+</button>
                </section>
        );
    }
}

export default Counter;