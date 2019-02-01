import React from 'react';
import FontAwesome from 'react-fontawesome';

import style from './style.css'

const CardInfo = (props) => {

    const getTeamName = (teams, team_id) => {
      let data = teams.find((item)=>{
        return item.id === team_id
      });
      if(data){
          return data.name
      }
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
