import React ,{Component} from 'react';
import './App.css';


class SeriesList extends Component{
    render(){
        return(
           <div>
               <div>
                   <input type="text" placeholder={'Type Seriesname ...     '} onChange={this.props.change}/>
               </div>
               <ul>
                   {this.props.list.map(series => (
                       <li key={series.show.id}>{series.show.name}</li>
                   ))}
               </ul>
           </div>
        );
    }
}

export default SeriesList;
