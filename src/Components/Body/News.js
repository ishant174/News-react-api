import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let fetchurl = `https://newsapi.org/v2/top-headlines?apiKey=95f8c278e6ed4b24af09bff2220f3f9f&q=${this.props.newsname}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(fetchurl);
    let parsedata = await data.json();
    this.setState({ totalResults: parsedata.totalResults });
    this.setState({ articles: parsedata.articles });
    this.setState({ loading: false });
  }
  handlePagination = async (event) => {
    this.setState({ loading: true });
    if (event.target.value === "next") {
      await this.setState({ page: this.state.page + 1 });
    } else if (event.target.value === "prev") {
      if (this.state.page > 1) {
        await this.setState({ page: this.state.page - 1 });
      }
    }
    let fetchurl = `https://newsapi.org/v2/top-headlines?apiKey=95f8c278e6ed4b24af09bff2220f3f9f&q=${this.props.newsname}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(fetchurl);
    let parsedata = await data.json();
    this.setState({ totalResults: parsedata.totalResults });
    this.setState({ articles: parsedata.articles });
    this.setState({ loading: false });
  };
  render() {
    let pagesno = Math.ceil(this.state.totalResults / 5);
    return (
      <div className="container my-3">
        <h2>Top headlines</h2>
        <div className="row">
          {this.state.loading ? (
            <div className="text-center">
              <div
                className="spinner-grow spinnergrow"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              ></div>
            </div>
          ) : (
            ""
          )}

          {!this.state.loading &&
            this.state.articles.map((article) => {
              return (
                <div key={article.url} className="col-md-4">
                  <NewsItem
                    newsurl={article.url}
                    image={article.urlToImage}
                    target="_blank"
                    title={article.title ? article.title.slice(0, 35) : ""}
                    description={
                      article.description
                        ? article.description.slice(0, 50)
                        : ""
                    }
                  />
                </div>
              );
            })}
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1 ? "disabled" : ""}
              className="btn btn-dark"
              value="prev"
              onClick={this.handlePagination}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pagesno === this.state.page ? "disabled" : ""}
              className="btn btn-dark"
              value="next"
              onClick={this.handlePagination}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
