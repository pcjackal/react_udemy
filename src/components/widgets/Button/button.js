import React from 'react'
import style from './button.css'

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
    
        default:
            break;
    }
    return template;
}

export default Button
