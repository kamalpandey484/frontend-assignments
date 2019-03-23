import React ,{Component} from 'react';
import './App.css';


class Main extends Component{
    render(){
        return(
            <div>
                <div className='header'>TV Series</div>
            <p>Length of Series is : {this.props.seriesLength}</p>
            </div>
        );
    }
}

export default Main;
