import React, {Component} from 'react';
import '../App.css';


class Main extends Component{
    state = {
        name : 'kamal'
    }
    render(){
        return(
            <div className='main'>
                <aside>Aside</aside>
                <section><button onClick={this.props.fun}>Counter</button>
                    <button onClick={()=>{this.props.myName(this.state.name)}}>data</button></section>
            </div>
        )
    }
}

export default Main;