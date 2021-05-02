import React, { useEffect, useState } from 'react';
import League from '../League/League';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, [])
    return (
        <>
        <h1 className="text-center mt-3 mb-5">Sports World</h1>
        <div className="row ml-2 mr-2"> 
           
            {
                leagues.map(league => <League league={league}></League>)
            }
          
           
        </div>
        </>
    );
};

export default Home;