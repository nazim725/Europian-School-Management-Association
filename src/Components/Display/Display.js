import React from 'react';
import './Display.css'
import Member from './../Member/Member';

const Display = (props) => {
    const {name,img,role}=props.member
    return (
        <div className="display">
            <div className="display-img">
                <img src={img} alt="" />
            </div>
            
            <div className="display-info">
                <h5>{name}</h5>
                <p><small>{role}</small></p>
                
                
            </div>

        </div>
    );
};

export default Display;