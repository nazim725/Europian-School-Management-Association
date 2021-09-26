import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Member.css'

const Member = (props) => {
    console.log(props)

    console.log(props.member)

    const {name,email,age,img,salary,role,country}=props.member;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="members">
            <div className="img-div">
                <img src={img} alt="" />
            </div>
            <h5>Name: {name}</h5>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <p>Salary: {salary}</p>
            <button onClick={()=>props.handleAddToCart(props.member)}> {element} Add To cart</button>
            <br />

           <div className="icons">
           <i class="fab fa-facebook-square"></i>
           <i class="fab fa-twitter-square"></i>
           
           </div>

        </div>
    );
};

export default Member;