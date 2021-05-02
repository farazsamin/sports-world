import React from 'react';
import male from '../../photos/male.png'
import female from '../../photos/female.png'
const Mutual = (props) => {
    const gender = props.gender;
    return (
        <div className="text-center">
           { 
               gender==="Male" ? <div><img style={{ width : "500px"}} src={male} alt=""/></div> : <div><img style={{ width : "500px"}}src={female} alt=""/></div>
           }
        </div>
    );
};

export default Mutual;