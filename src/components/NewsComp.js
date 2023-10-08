import React, { Component } from 'react'
import NewsItemComp from './NewsItemComp';
import Loader from './loader'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsComp extends Component {

  static defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  toCapital = (word) => {
    let w = word.toLowerCase();
    return (w.charAt(0).toUpperCase() + w.slice(1))
  }

  constructor(props) {
    super(props);
    
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults : 0
    }
    document.title = `NewsBits - ${this.toCapital(this.props.category)}`;
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8d3d872966464bc3ad4f940468a83aa7&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  async update() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8d3d872966464bc3ad4f940468a83aa7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      loading: false
    })
  }
  // handleNextClick = async () => {

  //   this.setState({ page: this.state.page + 1 })
  //   this.update()
  // }

  // handlePrevClick = async () => {

  //   this.setState({ page: this.state.page - 1 })
  //   this.update()
  // }

  fetchMoreData = async () => {
    
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8d3d872966464bc3ad4f940468a83aa7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
    })
  }

  render() {
    return (
      <>
        <h2 className='text-center mt-5'>News Bite - Top Headlines &nbsp;
          <span className="badge badge-pill  badge-dark">{this.toCapital(this.props.category)}</span>
        </h2>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loader/>}
        >
          <div className="container">
            <div className="row my-5">
              {
                
                this.state.articles.map((element) => {
                  return <div className="col-md-4">
                    <NewsItemComp title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                      key={element.url}
                      urlToImage={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>

                })
              }
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-center my-4">
            <button disabled={this.state.page <= 1} className="btn btn-dark ml-4" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={(this.state.page + 1) > (Math.ceil(this.state.totalResults / 20))} className="btn btn-dark ml-4" id="nextb" onClick={this.handleNextClick}> Next &rarr;</button>
          </div> */}

      </>

    )
  }
}
