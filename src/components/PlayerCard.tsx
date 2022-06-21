import { Component, JSX } from "solid-js";
import BoostGauge from "./BoostGauge";

import style from './PlayerCard.module.css'

type Param = {
  userName: string
  boost: number
  className: string
}

const PlayerCard: Component<Param> = ({ userName, boost, className }) => {
  const classes = `${style.playerCard} ${className}`

  return (
    <div class={classes}>
      <div class={style.header}>
        <span>{userName}</span>
        <span>{boost}</span>
      </div>
      <BoostGauge current={boost}/>
    </div>
  )
}

export default PlayerCard