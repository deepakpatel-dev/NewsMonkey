import React, { Component } from "react";
//import PropTypes from "prop-types";
import NewsItems from "./NewsItems";

export class News extends Component {
    
    constructor(){
        super()
        this.state={
            articles:[],
            loading : false
        }
    }
    async componentDidMount(){
      //console.log('cdm');
      let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4eae62a8157545deb7af46399afb93dd"
      let data = await fetch(url);
      let parseData = await data.json()
      //console.log(data);
      //console.log(parseData);
      this.setState({articles : parseData.articles})
      
    }
  render() {
    return (
      <div className="container my-3">
        <h2>News Monkey - Headline</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col md-4">
          <NewsItems key={element.url} title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} />
        </div>
        })}
          
        </div>
      </div>
    );
  }
}

export default News;
