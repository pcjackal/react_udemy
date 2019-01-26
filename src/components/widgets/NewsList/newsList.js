import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { URL } from '../../../config'
import style from './newsList.css'
import Button from '../Button/button'
import CardInfo from '../CardInfo/cardInfo';

export default class NewsList extends Component {

    state = {
        teams: [],
        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    componentWillMount = () => {
        this.request(this.state.start, this.state.end);
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

        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then( response => {
            this.setState({
                items: [...this.state.items, ...response.data],
                start,
                end
            })
        })
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request( this.state.end, end)
    }
    

    renderNews = ( type ) => {

        let template = null;

        switch (type ) {

            case('card'):
                template = this.state.items.map( (item, i) => (
                    <CSSTransition
                        classNames={{
                            enter: style.newslist_wrapper,
                            enterActive: style.newslist_wrapper_enter
                        }}
                        timeout={500}
                        key={i}>
                        <div>
                            <div className={style.newslist_item}>
                                <Link to={`/articles/${item.id}`}>
                                    <CardInfo 
                                        teams={this.state.teams} 
                                        team_id={item.team}
                                        date={item.date}
                                    />
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                ));
                break;
            default:
                template = null;
        }

        return template;
    }
    
    render() {
        console.log(this.state.teams[1])
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: "<!-- some comment -->"}} />
                <TransitionGroup
                    component="div"
                    className="list"
                >
                    {this.renderNews( this.props.type )}
                </TransitionGroup>
                <Button
                    type="loadmore"
                    loadMore={ () => this.loadMore() }
                    text="Load more news"
                />
            </div>
        )
    }
}
