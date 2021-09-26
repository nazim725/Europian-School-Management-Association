import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const memberCarts=props.cart

    // console.log(memberCarts)
    
    let salary=0;
    let name=''
   
    
    for(const memeber of memberCarts){
        salary=salary+memeber.salary
        name=name+" "+memeber.name +"||"
        
    }
    

    
  


    
    return (
        <div>
           <h4>Total Cost: {salary}</h4>
           
            {memberCarts.map(member=><h5>{member.name}</h5>)}
           
        </div>
    );
};

export default Cart;