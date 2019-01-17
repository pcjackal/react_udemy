import React, { Component } from 'react'
import axios from 'axios'
import SliderTemplates from './slider_templates';

export default class NewsSlider extends Component {

  state = {
    news: []
  }

  componentWillMount = () => {
    axios.get('http://localhost:3005/articles?_start=0&_end=3')
    .then( response => {
      this.setState({
        news: response.data
      })
      console.log(this.state.news);
    })
  }
  
  
  render() {
    return (
      <div>
        <SliderTemplates data={this.state.news} type="featured" />
      </div>
    )
  }
}
