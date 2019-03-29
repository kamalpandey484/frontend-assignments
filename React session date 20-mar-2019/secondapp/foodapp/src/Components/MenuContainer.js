import React, {Component} from 'react';
import Dishes from "./Dishes";

class MenuContainer extends Component{

    render() {
        return(
            <div className={'App-menu'}>
                <h1>Menu</h1>
                <Dishes/>
            </div>
        );
    }

}

export default MenuContainer;