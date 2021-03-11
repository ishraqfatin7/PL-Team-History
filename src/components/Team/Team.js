import React from 'react';
import './Team.css';
import { useHistory } from 'react-router-dom';

const Team = (props) => {
    const history = useHistory();
    const showDetails = id => {
        const url = `detail/${id}`;
        history.push(url);
    }
    const { strTeam, strTeamBadge, idTeam ,intFormedYear} = props.team;
    return (    
                <div className="col-md-4 mt-5">
                <div className="card card-custom">
                    <img src={strTeamBadge} className="card-img-top mt-5 w-50 rounded mx-auto d-block" alt="..." ></img>
                    <div className="card-body">
                        <h5 className="card-title">{strTeam}</h5>
                        <p className="card-text">Formed: {intFormedYear}</p>
                        <button onClick={() => showDetails(idTeam)} className="btn btn-primary btn-custom">Explore</button>
                    </div>
                </div>
                </div>
    );
};

export default Team;