import React from 'react';
import { Link } from 'react-router-dom';

const League = (props) => {
    const {strLeague,strSport,idLeague} = props.league;
    return (
        <div className="col-md-4 mb-3 ">
        <div className="card">
  <div className="card-body">
    <h5 className="card-title">{strLeague}</h5>
    <p className="card-text"> Type : {strSport}</p>
    <button className="btn btn-primary "><Link className="text-white" to={`/league/${idLeague}`}>Explore</Link></button>
   
  </div>
</div>
</div>
        
    );
};

export default League;