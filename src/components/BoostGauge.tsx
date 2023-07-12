import { Component } from 'solid-js'

import style from './BoostGauge.module.scss'

type Prop = {
  current: number
}

const BoostGauge: Component<Prop> = ({ current }) => {
  return (
    <>
      <span
        class={style.gauge}
        style={{ '--current-value': `${current}%` }}
      ></span>
      <span>{current}</span>
    </>
  )
}

export default BoostGauge
