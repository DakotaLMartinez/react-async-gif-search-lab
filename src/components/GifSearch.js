import React, { Component } from 'react'

export default class GifSearch extends Component {

  state = {
    search: ''
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSearch(this.state.search)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>GifSearch</h1>
        <div className="input-group">
          <input 
            type="text" 
            className="form-control col-sm-9" 
            name="search"
            placeholder="search for gifs" 
            onChange={this.handleChange}
            value={this.state.search}
            aria-describedby="search for gifs" 
          />
          
          <input type="submit" value="Search" className="btn btn-primary col-sm-3" />
        </div>
      </form>
    )
  }
}