// import React from "react";
import PropTypes from "prop-types";

import './card.styles.css'

export const Card = props => {
    return (
        <div className="card-container">
            <img 
                alt="monster" 
                src={`https://robohash.org/${props.monster.id}?set=set2`}
            />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
};

Card.propTypes = {
    monster: PropTypes.any.isRequired,
    // or
    // monster: PropTypes.shape({
    //     name: PropTypes.string.isRequired,
    // }).isRequired,
}