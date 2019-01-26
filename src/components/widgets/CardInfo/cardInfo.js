import React from 'react';
import FontAwesome from 'react-fontawesome';

import style from './style.css'

const CardInfo = (props) => {

    const getTeamName = (teams, team_id) => {
      return teams[team_id].name
    }
    

  return (
    <div className={style.cardInfo}>
       <span className={style.teamName}>
            { getTeamName(props.teams, props.team_id) }
       </span>
       <span className={style.date}>
        <FontAwesome name="clock" />
        {props.date}
       </span>
    </div>
  )
}

export default CardInfo
