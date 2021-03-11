import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import './TeamDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faYoutube,faFacebook } from '@fortawesome/free-brands-svg-icons';


const TeamDetail = () => {
    const { teamID } = useParams();
    const [teamDetail, setTeamDetail] = useState([])

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamID}`
        fetch(url)
            .then(response => response.json())
            .then(data => setTeamDetail(data.teams))
    }, [teamID])
    const { strAlternate, strTeam, strStadium ,strDescriptionEN,strTeamFanart3,strTeamBanner, strTeamFanart2,strTwitter,strYoutube,strGender} = teamDetail[0] || {};
    const youtubeUrl = `https://${strYoutube}`;
    const twitterUrl =`https://${strTwitter}`;
    
    let conditionalImage;
    if (strGender === 'Male' )
    {
        conditionalImage = strTeamFanart3;
    }
    else{
        conditionalImage = strTeamFanart2;
    }
    return (
        <div className="card-container p-5">
                     {
                      <Header team= {teamDetail[0]}></Header>
                    }
            <div className="card custom">
                <div className="row no-gutters">
                    
                    <div className="col-md-4">
                        <img src={conditionalImage} className="img-fluid w-100 rounded float-left m-5" alt=""></img>
                    </div>
                    <div className="col">
                        <div className="card-block mb-5 mt-5">
                            <h1 className="card-title"> Club: {strTeam}</h1>
                            <h3 className="card-title"> Also Known For:{strAlternate}</h3>
                            <h3 className="card-title">Home: {strStadium}</h3>
                            <h3 className="card-title">Team-Version: {strGender}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-block p-5">
                <div className="row">
                    <div className="col mb-5">
                        <p className="description">{strDescriptionEN}</p>
                    </div>
                    
                </div>
                <a href={twitterUrl} target="_blank" className=" bg-transparent border-success px-5"><FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href={youtubeUrl} target="_blank" className=" bg-transparent border-success px-5"><FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="#" className=" bg-transparent border-success px-5"><FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
            </div>
        </div>
    );
};

export default TeamDetail;