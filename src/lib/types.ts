export type Player = {
  id: string
  name: string
  team: number
  boost: number
}

export type Game ={
  hasWinner: boolean
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
  teams: Team[]
  game: Game
}

export type SOSMessage = {
  event: 'game:update_state',
  data: UpdateStateEvent
}