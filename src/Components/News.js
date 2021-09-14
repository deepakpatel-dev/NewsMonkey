import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

export class News extends Component {
  static defaultProps = {
  country : 'in',
  pageSize : 8,
  category : 'general',
}
static propTypes = {
  country : PropTypes.string,
  pageSize: PropTypes.number,
  category : PropTypes.string,
}
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

   async updateNews () {
     let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4eae62a8157545deb7af46399afb93dd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     this.setState({loading:true});
     let data = await fetch(url);
     let parsedData = await data.json();
     //console.log(data);
     //console.log(parsedData);
     this.setState({
       articles: parsedData.articles,
       totalResults: parsedData.totalResults,
       loading:false
     });
  }
  async componentDidMount() {
    //console.log('cdm');
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4eae62a8157545deb7af46399afb93dd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.updateNews();
  }
  
  handlePrevClick = async () => {
    console.log("Prev");
    this.setState({page: this.state.page - 1});
    this.updateNews();
    };

  handleNextClick = async () => {
    console.log("next");
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.size))) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4eae62a8157545deb7af46399afb93dd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(data);
    //   console.log(parsedData);
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading:false
    //   });
    // }
    this.setState({page: this.state.page + 1});
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:"35px 0px"}}>News Monkey - Top Headlines</h1>
          {this.state.loading&&<Spinner/>}
        <div className="row">
          {!this.state.loading&&this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
          disabled={this.state.page >= this.state.totalResults / this.props.pageSize}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
