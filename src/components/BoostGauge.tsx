import { Component } from "solid-js"

import style from './BoostGauge.module.css'

type Prop = {
  current: number
}

const BoostGauge: Component<Prop> = ({ current }) => {
  return (
    <>
      <div class={style.gauge} style={{ '--current-value': `${current}%` }}></div>
    </>
  )
}

export default BoostGauge