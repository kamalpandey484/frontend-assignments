import React, {Component} from 'react';
import Dish from "./Dish";
import '../App.css'
import AddDish from "./AddDish";


class Dishes extends Component{

    state={
        foodItem : [
            {
                name : 'Chicago Deep-Dish Pizza 1',
                desc: 'Home cooks will find deep-dish pizza, with its unique buttery cornmeal crust, more forgiving than its New York counterpart.',
                price: 50
            },
            {
                name : 'Chicago Deep-Dish Pizza 2',
                desc: 'Home cooks will find deep-dish pizza, with its unique buttery cornmeal crust, more forgiving than its New York counterpart.',
                price: 60
            },
            {
                name : 'Chicago Deep-Dish Pizza 3',
                desc: 'Home cooks will find deep-dish pizza, with its unique buttery cornmeal crust, more forgiving than its New York counterpart.',
                price: 70
            },
            {
                name : 'Chicago Deep-Dish Pizza 4',
                desc: 'Home cooks will find deep-dish pizza, with its unique buttery cornmeal crust, more forgiving than its New York counterpart.',
                price: 80
            },
            {
                name : 'Chicago Deep-Dish Pizza 5',
                desc: 'Home cooks will find deep-dish pizza, with its unique buttery cornmeal crust, more forgiving than its New York counterpart.',
                price: 90
            },
            {
                name : 'Chicago Deep-Dish Pizza',
                desc: 'Home cooks will find deep-dish pizza, with its unique buttery cornmeal crust, more forgiving than its New York counterpart.',
                price: 100
            }
        ]
    }

    render() {
        return(
           <div>
            <div className={'dishes'}>
                {
                    this.state.foodItem.map((dish,key) => {return <Dish dish={dish} key={key} />;})
                }

            </div>
               <AddDish/>
           </div>
        );
    }

}

export default Dishes;