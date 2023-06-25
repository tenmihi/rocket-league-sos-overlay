export type Player = {
  id: string
  name: string
  team: number
  boost: number
}

export type Game ={
  hasWinner: boolean
  teams: Team[]
}

// idx => 0: blue, 1: orange
export type Team = {
  name: string
}

export type UpdateStateEvent = {
  event: string
  players: {
    [playerName: string] : Player
  }
  game: Game
}

export type SOSEventType = 'game:update_state'

export type SOSMessage = {
  event: SOSEventType,
  data: UpdateStateEvent
}