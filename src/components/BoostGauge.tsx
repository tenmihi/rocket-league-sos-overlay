import { Component } from 'solid-js'

import style from './BoostGauge.module.scss'

type Prop = {
  current: number
}

const BoostGauge: Component<Prop> = ({ current }) => {
  return (
    <div class={style.boostGauge}>
      <span
        class={style.gauge}
        style={{ '--current-value': `${current}%` }}
      ></span>
      <span class={style.number}>{current}</span>
    </div>
  )
}

export default BoostGauge
