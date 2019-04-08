import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeItem,addQuantity,subtractQuantity} from './cartActions'
import './Cart.css'
import {Button} from 'react-bootstrap'

class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       <>
                           <ul className={"row ml-0"} key={item.id}>
                               <li className={"col-6 list-group-item"}>
                                   <h4>{item.name}</h4>
                                   <p><span className={"mr-3 font-weight-bold"}>MRP: {item.price}</span>
                                       {(item.quantity===0)?
                                       <Button
                                           onClick={()=>{this.handleSubtractQuantity(item.id)}}
                                           variant="warning"
                                           className={"mr-2"} disabled>
                                           -
                                       </Button>:
                                           <Button
                                               onClick={()=>{this.handleSubtractQuantity(item.id)}}
                                               variant="warning"
                                               className={"mr-2"}>
                                               -
                                           </Button>}
                                       {item.quantity}
                                       <Button onClick={()=>{this.handleAddQuantity(item.id)}} variant="success" className={"ml-2"}>+</Button>
                                   </p>
                               </li>
                               <li className={"col-3 list-group-item d-flex justify-content-center align-items-center"}>
                                   {item.price * item.quantity}
                               </li>
                               <li className={"col-3 list-group-item d-flex justify-content-center align-items-center"}>
                                   <button className="btn btn-danger" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                               </li>
                           </ul>
                       </>
                )
                })
            ):

             (
                <p>Nothing.</p>
             );
        let totalItems = this.props.total;

       return(
            <div className="container">
                <div className="cart">
                    <h5>Your Cart:</h5>
                    <ul className="collection">
                        {addedItems}
                        <ul className={"row ml-0"   }>
                            <li className={"col-6 list-group-item"}>
                                <h3>Grand Total</h3>
                            </li>
                            <li className={"col-3 list-group-item d-flex justify-content-center align-items-center"}>
                                <h3>{totalItems}</h3>
                            </li>
                        </ul>
                    </ul>
                </div> 
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        addedItems: state.addedItems,
        total: state.total,
        totalItem: state.totalItem
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)