import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import Title from "../Title/Title";

const Categories = () => {
    return (
        <>
            <Title title="Titles" />
      <section className="categories">
        <div className="categories-container">
          <Link to="/series">
            <div className="categories-card">
              <div className="categories-card__head">
                <h1>Series</h1>
              </div>
              <div className="categories-card__body">
                <p>Popular Series</p>
              </div>
            </div>
          </Link>
          <Link to="/movies">
            <div className="categories-card">
              <div className="categories-card__head">
                <h1>Movies</h1>
              </div>
              <div className="categories-card__body">
                <p>Popular Movies</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
        </>
    )
}
export default Categories;