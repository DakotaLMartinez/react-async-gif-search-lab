import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {

  constructor(props) {
    super(props)

    // this.handleSearch = this.handleSearch.bind(this)
    this.state = {
      gifs: [
       
      ]
    }
  }

  handleSearch = (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(query)}&api_key=4aSMLokX4L4Mi4R8jI01gVmOeUrC5Fsb&rating=g`;
    fetch(url)
      .then(res => res.json())
      .then(gifsData => {
        const gifs = gifsData.data.slice(0,3).map(gif => {
          return { title: gif.title, id: gif.id, url: gif.images.original.url }
        })
        this.setState({ gifs })
      })
  }

  render() {
    return(
      <div>
        <h1>GifListContainer</h1>
        <GifSearch handleSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}