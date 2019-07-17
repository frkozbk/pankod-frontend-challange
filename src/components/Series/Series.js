import React, { Component } from "react";
import "./Series.css";
import Title from "../Title/Title";
import Card from '../util/Card'

class Series extends Component {
    render() {
      return (
        <>
          <Title title="Series" />
          <section className="series">
            <div className="series-container">
              <Card
                title="programtitle"
                backgroundUrl="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg"
              />
              <Card
                title="programtitle"
                backgroundUrl="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg"
              />
            </div>
          </section>
        </>
      );
    }
  }
export default Series