import React, { Component } from "react";
import "./Movies.css";
import Title from "../Title/Title";
import Card from "../Card/Card";
import {connect} from 'react-redux'
import {fetchJsonFeed} from '../../actions/index.js'

import sort from '../../util'
class Movies extends Component {
  state={
    seacrh:'',
    selected:'SORT_BY_DEFAULT'
  }
  componentDidMount() {
      
    this.props.fetchJsonFeed();
  }
  componentDidUpdate(prevProps,prevState){
    let sortedData
      if(this.props.data!==prevProps.data){
        sortedData =sort(this.props.data,'movie',this.state.selected)
        this.setState({data:sortedData})
      }
      if(prevState.selected !==this.state.selected){
        sortedData=sort(this.props.data,'movie',this.state.selected)
        this.setState({data:sortedData})
      }
  }
  
  render() {
    console.log(this.state.data)
    let Cards
       if(this.state.data){
          Cards = this.state.data.map((item,index) => {
            return <Card key={index} title={item.title}  backgroundUrl={item.images['Poster Art'].url}/>
          })
       }
    return (
      <>
        <Title title="Movies" />
        
        <section class="sort">
        <div class="sort-container">
            <div class="search-box">
            <input 
                    type="text" 
                    placeholder="Search" 
                    name="search" 
                    id="search"
                    value={this.state.search}
                    onChange={(e) => {this.setState({[e.target.name] : e.target.value})}}
                />
                <div class="search-icon">
                    <i class="fas fa-search"></i>
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
        <section className="movies">
          <div className="movies-container">
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
  {fetchJsonFeed}
  )(Movies);
