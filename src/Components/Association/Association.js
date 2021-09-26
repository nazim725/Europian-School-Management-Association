import React, { useEffect, useState } from 'react';
import Cart from '../Carts/Cart';
import Member from '../Member/Member';
import './Association.css'

const Association = () => {
    const [members,setmembers]=useState([]);
    const [carts,setCarts]=useState([]);
    useEffect(()=>{
        fetch('./members.JSON')
        .then(res=>res.json())
        .then(data=>setmembers(data))
    },[])

    const handleAddToCart=(member)=>{
        const newcart=[...carts,member];
        setCarts(newcart)
        let count=0
        count=count+1
    }


    return (
        <div className="association">
            <div className="members-info">
            {
                members.map(member=> <Member 
                    key={member.name}
                    handleAddToCart={handleAddToCart}
                    member={member}></Member>)
            }
            </div>
            <div className="cart-info">
               

                <h4><i class="fas fa-user-alt member-icon"></i> Members Added:{carts.length}</h4>
                <Cart
              
                 cart={carts}></Cart>

            </div>
        </div>
    );
};

export default Association;