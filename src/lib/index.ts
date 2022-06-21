import { createSignal } from 'solid-js'

export const [blueTeamPlayers, setBlueTeamPlayers] = createSignal([] as Player[])
export const [orangeTeamPlayers, setOrangeTeamPlayers] = createSignal([] as Player[])
export const [visibleFlag, setVisibleFlag] = createSignal(false)

type Player = {
  id: string
  name: string
  team: number
  boost: number
}

type Game ={
  hasWinner: boolean
}

// idx => 0: blue, 1: orange
type Team = {
  name: string
}

type UpdateStateEvent = {
  event: string
  players: {
    [playerName: string] : Player
  }
  teams: Team[]
  game: Game
}

export class SOSReceiver {
  webSocketConnection: WebSocket | null = null

  constructor (host: string, port: number) {}

  public connect() {
    this.webSocketConnection = new WebSocket('ws://localhost:49122');
    this.webSocketConnection.onmessage = this._onMessage
    this.webSocketConnection.onopen = this._onOpen
    this.webSocketConnection.onclose = this._onClose
  }

  private _onOpen() {
    console.debug('Connection established')
  }

  private _onClose() {
    console.debug('Disconnected')
  }

  private _onMessage(event: any) {
    const jsonData = JSON.parse(event.data)

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
}