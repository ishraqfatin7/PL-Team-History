import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(response => response.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    teams.map(team => <Team team={team}></Team>)
                }
            </div>
        </div>

    );
};

export default Home;