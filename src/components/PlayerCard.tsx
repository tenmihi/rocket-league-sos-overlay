import { Component, JSX } from 'solid-js'
import BoostGauge from './BoostGauge'

import style from './PlayerCard.module.css'

type Param = {
  userName: string
  boost: number
  className: string
}

const PlayerCard: Component<Param> = ({ userName, boost, className }) => {
  const rootClasses = `${style.playerCard} ${className}`

  return (
    <div class={rootClasses}>
      <div class={style.userName}>
        <span>{userName}</span>
      </div>
      <BoostGauge current={boost} />
    </div>
  )
}

export default PlayerCard
