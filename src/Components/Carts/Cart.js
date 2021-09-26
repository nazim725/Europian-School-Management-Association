import React from 'react';
import Display from '../Display/Display';
import './Cart.css'

const Cart = (props) => {
    const memberCarts=props.cart
    let salary=0;
    for(const memeber of memberCarts){
        salary=salary+memeber.salary  
    }
    

    
  


    
    return (
        <div className="cart">
           <h4>Total Cost: {salary}</h4>
           <h4>Members:--</h4>
            {memberCarts.map(member=> <Display member={member}></Display>)}
           
        </div>
    );
};

export default Cart;