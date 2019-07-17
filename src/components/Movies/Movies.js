import React, { Component } from "react";
import "./Movies.css";
import Title from "../Title/Title";
import Card from "../Card/Card";
import {connect} from 'react-redux'
import {fetchJsonFeed} from '../../actions/index.js'
class Movies extends Component {
  state={
    seacrh:'',
    selected:''
  }
  componentDidMount() {
      
    this.props.fetchJsonFeed();
  }
  componentDidUpdate(prevProps){
    
    if(this.props.data!==prevProps.data){
      let filteredData=this.props.data.filter(item => {
        return item.programType==='movie' &&item.releaseYear >=2010
      })
      let sortedData =filteredData.sort((a,b) =>{
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
      let slicedData=sortedData.slice(0,21)
          .slice(0,21)
      
      
      this.setState({data:slicedData})
      console.log(this.state.data)
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
