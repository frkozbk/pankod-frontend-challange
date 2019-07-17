import React, { Component } from "react";
import Title from "../Title/Title";
import Card from '../Card/Card'
import {connect} from 'react-redux'

import {fetchJsonFeed} from '../../actions/index.js'

import sort from '../../util'
import "./Series.css";




class Series extends Component {
    state={
      search:'',
      selected:"SORT_BY_DEFAULT"
    }
    async componentDidMount() {
      
      await this.props.fetchJsonFeed();
    }
    
    componentDidUpdate(prevProps,prevState){
      let sortedData
      if(this.props.data!==prevProps.data){
        sortedData =sort(this.props.data,'series',this.state.selected)
        this.setState({data:sortedData})
      }
      if(prevState.selected !==this.state.selected){
        sortedData=sort(this.props.data,'series',this.state.selected)
        this.setState({data:sortedData})
      }
    }
      
    render() {
      let Content;
      if(this.state.data&&this.state.search.length<3){
          Content = this.state.data.map((item,index) => {
            return <Card key={index} title={item.title}  backgroundUrl={item.images['Poster Art'].url}/>
          })
      }else if (this.state.data&&this.state.search.length>=3){
      
      let searchResult= this.state.data.filter((item) => {

      return item.title.toLowerCase().includes(this.state.search.toLowerCase())
      })
      Content = !searchResult.length ? <h1>Sonuç Bulunamadı</h1> : searchResult.map((item,index) => {
          return <Card key={index} title={item.title}  backgroundUrl={item.images['Poster Art'].url}/>
        })
      }else {
      Content = <h1>Yükleniyor</h1>
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
              {Content}
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