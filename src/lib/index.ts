import { createSignal } from 'solid-js'
import { Player, SOSMessage, UpdateStateEvent } from './types'
import { WebSocketSOSReceiver } from './sos-receiver/websocket'
import { DebugSOSReceiver } from './sos-receiver/debug'

export const [blueTeamPlayers, setBlueTeamPlayers] = createSignal(
  [] as Player[]
)
export const [orangeTeamPlayers, setOrangeTeamPlayers] = createSignal(
  [] as Player[]
)
export const [visibleFlag, setVisibleFlag] = createSignal(false)

function onMessage(message: SOSMessage) {
  console.log(message)

  if (message.event == 'game:update_state') {
    const data = message.data as UpdateStateEvent

    if (data.game.hasWinner) {
      setVisibleFlag(false)
      return
    }

    setVisibleFlag(true)

    const _blueTeamPlayers = [],
      _orangeTeamPlayers = []
    for (let playerName in data.players) {
      const player = data.players[playerName]
      player.team == 0
        ? _blueTeamPlayers.push(player)
        : _orangeTeamPlayers.push(player)
    }

    setBlueTeamPlayers(_blueTeamPlayers)
    setOrangeTeamPlayers(_orangeTeamPlayers)
  }
}

export function connectToRocketLeague() {
  let sosReceiver
  if (import.meta.env.VITE_SOS_DEBUG) {
    console.info('[sos-overlay] use debug receiver')
    sosReceiver = new DebugSOSReceiver()
  } else {
    sosReceiver = new WebSocketSOSReceiver()
  }
  sosReceiver.connect()
  sosReceiver.setOnMessage(onMessage)
}
