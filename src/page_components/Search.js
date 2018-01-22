import React, { Component } from 'react';
import axios from 'axios'

const API_URL = 'http://api.giphy.com/v1/gifs/search'

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>
      <img src={r.images.fixed_width_downsampled.url} alt={r.title} />
    </li>
  ))
  return <ul>{options}</ul>
}


class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`${API_URL}?q=${this.state.query}&api_key=0Efg5mlFqEAm66u34MZpWipb4gfAsT6A&limit=25`)
      .then(({ data }) => {
        console.log(data.data);
        this.setState({
          results: data.data                             
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search