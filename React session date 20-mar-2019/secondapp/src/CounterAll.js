import React, {Component} from 'react';

class CounterAll extends Component{
    render() {
        return(
            <section>
                <button onClick={this.props.decAll} className='dec-all-btn'>Decrease All</button>
                <button onClick={this.props.incAll} className='inc-all-btn'>Increase All</button>
            </section>
        );
    }
}

export default CounterAll;