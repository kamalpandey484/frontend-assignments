import React, {Component} from 'react';
import '../App.css';


class Main extends Component{

    render(){
        return(
            <div className='main'>
                <aside>Aside</aside>
                <section><button onClick={this.props.fun}>Counter</button></section>
            </div>
        )
    }
}

export default Main;