import React from 'react';
import './Header.css';

const Header = (props) => {
    const { strStadiumThumb, strTeamBadge } = props.team ||{};
    return (
     
            <div className="header mb-5 rounded header" style={{
                backgroundImage: `url(${(strStadiumThumb) ||"https://images2.imgbox.com/b2/21/tTTgX200_o.png"})`,
                
                backgroundSize:"cover",
                minWidth:"100vh",
                minHeight:"45vh",
                display:"flex",
                alignItems:"center",
                flexDirection:"column",


                }}>
                <h1>Premier League Teams History</h1>
                <img src={strTeamBadge} alt="" className="image"/>
            </div>

    );
};

export default Header;