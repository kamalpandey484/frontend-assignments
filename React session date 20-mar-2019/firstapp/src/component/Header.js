import React, {Component} from 'react';
import '../App.css'

class Header extends Component {

    render(){
        return(
            <header>Header <span className='counter-area'>{this.props.num}</span> </header>
        );
    }
}

export default Header;