import { Component, For } from 'solid-js'

import dummyImage from './assets/dummy.jpg'

import styles from './App.module.scss'
import PlayerCard from './components/PlayerCard'

import {
  visibleFlag,
  blueTeamPlayers,
  connectToRocketLeague,
  orangeTeamPlayers,
} from './lib/index'

const App: Component = () => {
  connectToRocketLeague()

  // const isDev = import.meta.env.DEV
  const isDev = false

  return (
    <div
      class={styles.App}
      style={{ 'background-image': isDev ? `url(${dummyImage})` : '' }}
    >
      <div class={styles.playerCards}>
        <div>
          <For each={blueTeamPlayers()}>
            {(player) => (
              <PlayerCard
                className={styles.playerCard}
                userName={player.name}
                boost={player.boost}
              />
            )}
          </For>
        </div>
        <div>
          <For each={orangeTeamPlayers()}>
            {(player) => (
              <PlayerCard
                className={styles.playerCard}
                userName={player.name}
                boost={player.boost}
              />
            )}
          </For>
        </div>
      </div>
    </div>
  )
}

export default App
