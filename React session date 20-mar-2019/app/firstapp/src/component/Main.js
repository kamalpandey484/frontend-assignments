import React, {Component} from 'react';
import '../App.css';


class Main extends Component{

    render(){
        return(
            <div className='main'>
                <aside>Aside</aside>
                <section><button onClick={this.props.inc} className='inc-btn'>Increment</button>
                    <button onClick={this.props.dec} className='dec-btn'>Decrement</button>
                    <button onClick={this.props.reset} className='reset-btn'>Reset</button>
                </section>
            </div>
        )
    }
}

export default Main;