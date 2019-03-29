import React, {Component} from 'react';
import '../App.css';

class Dish extends Component{

    dishClick = () =>{
      console.log(this.props.dish.desc);
    };

    render() {
        return(
            <div>
                <div className={'dish'} onClick={this.dishClick}>
                    <h3>{this.props.dish.name}</h3>
                    <p>{this.props.dish.price}</p>
                    <p>{this.props.dish.status}</p>
                </div>
            </div>
        );
    }

}

export default Dish;