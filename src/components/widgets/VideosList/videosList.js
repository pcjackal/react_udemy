import React, { Component } from 'react'
import style from './videosList.css'
import axios from 'axios';

import {URL} from '../../../config'
import Button from '../Button/button'

export default class videosList extends Component {

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

    loadMore = () => {

    }
    
    renderButton = (params) => {
        return this.props.loadmore ?
            <Button
                type='loadmore'
                text='Load More Videos'
                loadmore={() => this.loadMore()}
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
        {this.renderButton() }
      </div>
    )
  }
}

