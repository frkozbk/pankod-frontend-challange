import React, { Component } from "react";
import "./Movies.css";
import Title from "../Title/Title";
import Card from "../util/Card";
import {connect} from 'react-redux'
import {fetchJsonFeed} from '../../actions/index.js'
class Movies extends Component {
  state={}
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
