import { Component, For } from 'solid-js';

import dummyImage from './assets/dummy.jpg'

import styles from './App.module.css';
import PlayerCard from './components/PlayerCard';

import { blueTeamPlayers, orangeTeamPlayers, SOSReceiver } from './lib/index'

const App: Component = () => {

  const sosReceiver = new SOSReceiver('localhost', 49122)
  sosReceiver.connect()

  const isDev = import.meta.env.DEV

  return (
    <div class={styles.App} style={{ 'background-image': isDev ? `url(${dummyImage})` : "" }}>
      <div class={styles.playerCards}>
        <div>
          <For each={blueTeamPlayers()}>{(player) => 
            <PlayerCard
              className={styles.playerCard}
              userName={player.name}
              boost={player.boost}/>
          }</For>
        </div>
        <div>
          <For each={orangeTeamPlayers()}>{(player) => 
            <PlayerCard
              className={styles.playerCard}
              userName={player.name}
              boost={player.boost}/>
          }</For>
        </div>
      </div>
    </div>
  );
};

export default App;
