import React, { Component } from 'react'
import style from './videosList.css'
import axios from 'axios';

import {URL} from '../../../config'
import Button from '../Button/button'
import{ Link } from 'react-router-dom'
import VideosListTemplate from './videosListTemplate'

export default class VideosList extends Component {

    state = {
      teams: [],
      videos: [],
      start: this.props.start,
      end: this.props.start + this.props.amount,
      amount: this.props.amount
    }

    renderTitle = () => {
      return this.props.title ? 
      <h3><strong>NBA</strong> Videos</h3>
      : null
    }

    componentWillMount = () => {
      this.request(this.state.start, this.state.end)
    }
    

    request = (start, end) => {
        if(this.state.teams.length < 1) {
            axios.get(`${URL}/teams`)
            .then( response => {
                this.setState({
                    teams: response.data
                })
            })
        }

        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
        .then( response => {
            this.setState({
                videos: [...this.state.videos, ...response.data],
                start,
                end
            })
        })
    }

    renderVideos = () => {
        let template = null;

        switch(this.props.type) {
            case('card'):
                template = <VideosListTemplate data={this.state.videos} teams={this.state.teams} />
                break;
            default:
                template = null;
        }

        return template;
    }
    

    loadMore = () => {
        let end =  this.state.end + this.state.amount;
        this.request(this.state.end, end);
    }
    
    renderButton = () => {
        return this.props.loadmore ?
            <Button
                type='loadmore'
                text='Load More Videos'
                loadMore={() => this.loadMore()}
            />
            :
            <Button
                type='linkTo'
                text='More Videos'
                linkTo='/videos'
            />
    }
    
    
  render() {
    return (
      <div className={style.videsList_wrapper}>
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton() }
      </div>
    )
  }
}

