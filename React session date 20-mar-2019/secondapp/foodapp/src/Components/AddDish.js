import React, {Component} from 'react';

class AddDish extends Component{

    state = {
        dish: {}
    };

    render() {
        return(
            <div>
                <h1>Add Dish</h1>
                <form action="">
                    <input type="text" placeholder={'Food Name'} value={this.state.dish.name}/>
                    <input type="text" placeholder={'Food Desc'} value={this.state.dish.price}/>
                    <input type="text" placeholder={'Food Name'} value={this.state.dish.status}/>
                </form>
            </div>
        );
    }

}

export default AddDish;