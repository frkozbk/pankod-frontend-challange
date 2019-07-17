import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

import "./Card.css";

const Card = ({backgroundUrl,title}) => {
    return (
        <>
      <Link to="/series">
        <div className="card">
          <div
            className="card__head"
            style={{
              backgroundImage: `url(${backgroundUrl})`
            }}
          />
          <div className="card__body">
            <p>{title}</p>
          </div>
        </div>
      </Link>
    </>
    )
}
Card.propTypes = {
    backgroundUrl:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
}

export default Card