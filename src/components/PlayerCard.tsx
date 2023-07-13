import { Component, JSX } from 'solid-js'
import BoostGauge from './BoostGauge'

import style from './PlayerCard.module.scss'

type Param = {
  userName: string
  boost: number
}

const PlayerCard: Component<Param> = ({ userName, boost }) => {
  return (
    <div class={style.playerCard}>
      <div class={style.userName}>
        <span>{userName}</span>
      </div>
      <BoostGauge current={boost} />
    </div>
  )
}

export default PlayerCard
