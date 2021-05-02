import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Mutual from '../Mutual/Mutual'

const LeagueDetail = () => {
    const {idLeague} = useParams();
    const [league, setLeague] = useState([])
    
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then(res => res.json())
        .then(data=> setLeague(data.leagues[0]))
    },[])
    const {strLeague,intFormedYear,strGender,strDescriptionEN,strFacebook,strTwitter,strYoutube} = league;
    return (
        <div className="text-center">
            <Mutual gender={strGender}></Mutual>
            <h3>{strLeague}</h3>
            <p>Established : {intFormedYear}</p>
            <p>Gender : {strGender}</p>
            <p>{strDescriptionEN}</p>
          <a href={strFacebook}>  <FontAwesomeIcon icon={faFacebook} /></a>
          <a href={strTwitter}>  <FontAwesomeIcon icon={faTwitter} /></a>
          <a href={strYoutube}>  <FontAwesomeIcon icon={faYoutube} /></a>
            
           
        </div>
    );
};

export default LeagueDetail;