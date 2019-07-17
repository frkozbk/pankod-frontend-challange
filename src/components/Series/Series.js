import React, { Component } from "react";
import Title from "../Title/Title";
import Card from '../Card/Card'
import {connect} from 'react-redux'

import {fetchJsonFeed} from '../../actions/index.js'
import "./Series.css";


class Series extends Component {
    state={
      search:'',
      selected:"SORT_BY_DEFAULT"
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
      
    }
    render() {
      
      let Cards
       if(this.state.data){
          Cards = this.state.data.map((item,index) => {
            return <Card key={index} title={item.title}  backgroundUrl={item.images['Poster Art'].url}/>
          })
       }
       
      return (
        <>
        <Title title="Series" />
          <section className="sort">
        <div className="sort-container">
            <div className="search-box">
                <input 
                    type="text" 
                    placeholder="Search" 
                    name="search" 
                    id="search"
                    value={this.state.search}
                    onChange={(e) => {this.setState({[e.target.name] : e.target.value})}}
                />
                <div className="search-icon">
                    <i className="fas fa-search"></i>
                </div>
            </div>



            <select value={this.state.selected} onChange={(e)=>{this.setState({selected:e.target.value})}} className="sortby">
                <option  value="SORT_BY_DEFAULT" disabled selected hidden>Sort by</option>
                <option  value="SORT_BY_YEAR_DESC">Sort by year desc</option>
                <option  value="SORT_BY_YEAR_ASC">Sort by year in asc</option>
                <option  value="SORT_BY_TITLE_DESC">Sort by title in desc</option>
                <option  value="SORT_BY_TITLE_ASC">Sort by title in asc</option>
            </select>
        </div>
    </section>
          
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