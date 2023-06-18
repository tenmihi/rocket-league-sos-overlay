import { createSignal } from 'solid-js'
import { Player, UpdateStateEvent } from './types'
import { WebSocketSOSReceiver } from './sos-receiver/websocket'

export const [blueTeamPlayers, setBlueTeamPlayers] = createSignal([] as Player[])
export const [orangeTeamPlayers, setOrangeTeamPlayers] = createSignal([] as Player[])
export const [visibleFlag, setVisibleFlag] = createSignal(false)

function onMessage(event: any) {
  const jsonData = JSON.parse(event.data)

  console.log(jsonData)

  if (jsonData.event == 'game:update_state') {
    const data = jsonData.data as UpdateStateEvent

    if (data.game.hasWinner) {
      setVisibleFlag(false)
      return 
    }

    setVisibleFlag(true)

    const _blueTeamPlayers = [], _orangeTeamPlayers = []
    for (let playerName in data.players) {
      const player = data.players[playerName]
      player.team == 0 ? _blueTeamPlayers.push(player) : _orangeTeamPlayers.push(player)
    }

    setBlueTeamPlayers(_blueTeamPlayers)
    setOrangeTeamPlayers(_orangeTeamPlayers)
  }
}

export function connectToRocketLeague() {
  const sosReceiver = new WebSocketSOSReceiver()
  sosReceiver.connect()
  sosReceiver.setOnMessage(onMessage)
}