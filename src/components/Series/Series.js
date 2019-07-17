import React, { Component } from "react";
import Title from "../Title/Title";
import Card from '../util/Card'
import {connect} from 'react-redux'

import {fetchJsonFeed} from '../../actions/index.js'
import "./Series.css";


class Series extends Component {
    state={
    }
    async componentDidMount() {
      
      await this.props.fetchJsonFeed();
    }
    
    componentDidUpdate(prevProps){
      if(this.props.data!==prevProps.data){
        let filteredData=this.props.data
        // .filter(item=>{
          
        //   return item.programType='series' && item.releaseYear>=2010
        // })
        let slicedData=filteredData.slice(0,21)
        let sortedData = slicedData.sort((a,b) =>{
          var first = a.title.toLowerCase()
        var second = b.title.toLowerCase()
        let comparison = 0;
        if (first > second) {
          comparison = 1;
        } else if (first < second) {
          comparison = -1;
        }
        return comparison;
          
        })
        
        

        this.setState({data:sortedData})
      }
      console.log(this.state.data)
    }
    render() {
      console.log(this.state.data)
      let Cards
       if(this.state.data){
          Cards = this.state.data.map(item => {
            return <Card title={item.title}  backgroundUrl={item.images['Poster Art'].url}/>
          })
       }
       
      return (
        <>
          <Title title="Series" />
          <section className="series">
            <div className="series-container">
              {this.state.data ? Cards : <h1>Yükleniyor</h1>}
            </div>
          </section>
        </>
      );
    }
  }
const mapStateToProps = state =>({
  data:state.data.entries
})
export default connect(
  mapStateToProps,
  {fetchJsonFeed})(Series);