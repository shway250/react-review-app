import React, { Component } from 'react';
//import axios after npm install
import axios from 'axios'

//base url for giphy api
const API_URL = 'http://api.giphy.com/v1/gifs/search'

//functional component for rendering results of API call
const Suggestions = (props) => {
  //map the results to an array on <li> tags
  const options = props.results.map(r => (
    <li key={r.id}>
      <img src={r.images.fixed_width_downsampled.url} alt={r.title} />
    </li>
  ))
  //return the array of <li> tags inside of a <ul>
  return <ul>{options}</ul>
}


class Search extends Component {
  //use constructor to instantiate component with inital props and state values
  constructor(props){
    super(props)
    this.state = {
      query: '',
      results: []
    }
  }

  //method for using axios to do API call and set results state variable to json from call
  getInfo = () => {
    //axios syntax with string literals
    axios.get(`${API_URL}?q=${this.state.query}&api_key=0Efg5mlFqEAm66u34MZpWipb4gfAsT6A&limit=25`)
      .then(({ data }) => {
        console.log(data.data);
        this.setState({
          results: data.data                             
        })
      })
  }

  //method for handling change on text input for API call
  handleInputChange = () => {
    //setting query state variable to value from text input
    this.setState({
      query: this.search.value
    }, () => {
      //if there is somthing in search box do a search
      if (this.state.query && this.state.query.length >= 1) {
        this.getInfo()
      } else{//if search box is empty clear the page
        this.setState({results:[]})
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
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search