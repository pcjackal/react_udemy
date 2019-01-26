import React from 'react'
import style from './button.css'
import {Link} from 'react-router-dom'

const Button = (props) => {

    let template = null;

    switch (props.type) {
        case 'loadmore':
            template = (
                <div className={style.loadmore_btn} onClick={props.loadMore} >
                    {props.text}
                </div>
            );
            break;

        case 'linkTo':
            template = (
                <Link to={props.linkTo}
                    className={style.loadmore_btn}>
                    {props.text}
                </Link>
            )
            break;
    
        default:
            break;
    }
    return template;
}

export default Button
