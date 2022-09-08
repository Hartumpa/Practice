import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};
    capitalizeFirstLetter=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsGuggi`;

  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=18fd15ceea464a41b3a6e184e838e65c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let res = await data.json();
    this.setState({
      articles: res.articles,
      totalArticles: res.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    // it will run after render
    this.updateNews();
  }

  preClick = async () => {
    this.setState({page:this.state.page-1});
    this.updateNews();
  };

  nextClick = async () => {
    this.setState({page:this.state.page+1})
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="mb-4 text-center">NewsGuggi - Top Headline from {this.capitalizeFirstLetter(this.props.category)}</h1>
        {/* {this.state.loading && <Spinner />} */}
        {/* <div className="row">
          {!this.state.loading &&
            this.state.articles.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <NewsItem
                    title={ele.title ? ele.title.slice(0, 44) : ""}
                    description={
                      ele.description ? ele.description.slice(0, 80) : ""
                    }
                    imageUrl={ele.urlToImage}
                    newsUrl={ele.url}
                    author={ele.author}
                    date={ele.publishedAt}
                    source={ele.source.name}
                  />
                </div>
              );
            })}
        </div> */}
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.preClick}
            disabled={this.state.page <= 1}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.nextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
