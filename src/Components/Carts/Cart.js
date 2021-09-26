import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const memberCarts=props.cart
    
    let salary=0;
    let name=''
   
    
    for(const memeber of memberCarts){
        salary=salary+memeber.salary
        name=name+" "+memeber.name +"||"
        
        
        
      
    }
    
    return (
        <div>
           <h4>Total Cost: {salary}</h4>
           <h5>Member Name  : <p>{name} </p></h5>
        </div>
    );
};

export default Cart;