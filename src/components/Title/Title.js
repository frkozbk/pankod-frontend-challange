import React from "react";
import PropTypes from 'prop-types'

import "./Title.css";

const Title = ({title}) => {
    return (
        <section className="title">
      <div className="title-container">
        <h1>Popular {title}</h1>
      </div>
    </section>
    )
}
Title.propTypes = {
    title:PropTypes.string.isRequired,
}
export default Title