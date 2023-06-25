import { SOSEventType } from "../types";

export const debugUpdateState = {
  "event": "game:update_state" as SOSEventType,
  "data": {
      "event": "gamestate",
      "game": {
          "arena": "Stadium_P",
          "time_milliseconds": 300,
          "time_seconds": 300,
          teams: [
              {
                  "color_primary": "1873FF",
                  "color_secondary": "E5E5E5",
                  "name": "BLUE",
                  "score": 0
              },
              {
                  "color_primary": "C26418",
                  "color_secondary": "E5E5E5",
                  "name": "ORANGE",
                  "score": 0
              }
          ],
          "ball": {
              "location": {
                  "X": 0,
                  "Y": 0,
                  "Z": 0
              },
              "speed": 0,
              "team": 0
          },
          "hasTarget": false,
          "target": "",
          "hasWinner": false,
          "winner": "",
          "isOT": false,
          "isReplay": false
      },
      "players": {
          "xamxam_1": {
              "id": "xamxam_1",
              "primary_id": "1",
              "name": "xamxam",
              "team": 0,
              "boost": 33,
              "speed": 0,
              "isPowersliding": false,
              "isSonic": false,
              "onGround": true,
              "onWall": false,
              "hasCar": true,
              "shortcut": 0,
              "attacker": "",
              "isDead": false,
              "location": {
                  "X": 0,
                  "Y": 0,
                  "Z": 0,
                  "pitch": 0,
                  "roll": 0,
                  "yaw": 0
              },
              "score": 0,
              "assists": 0,
              "demos": 0,
              "goals": 0,
              "saves": 0,
              "shots": 0,
              "touches": 0,
              "cartouches": 0
          },
          "Termini_2": {
              "id": "Termini_2",
              "primary_id": "2",
              "name": "Termini",
              "team": 0,
              "boost": 33,
              "speed": 0,
              "isPowersliding": false,
              "isSonic": false,
              "onGround": true,
              "onWall": false,
              "hasCar": true,
              "shortcut": 1,
              "attacker": "",
              "isDead": false,
              "location": {
                  "X": 0,
                  "Y": 0,
                  "Z": 0,
                  "pitch": 0,
                  "roll": 0,
                  "yaw": 0
              },
              "score": 0,
              "assists": 0,
              "demos": 0,
              "goals": 0,
              "saves": 0,
              "shots": 0,
              "touches": 0,
              "cartouches": 0
          }
      },
      "hasGame": true,
      "match_guid": "26552A7ECB4C3299CD6DC8B2B89E0B82"
  }
}