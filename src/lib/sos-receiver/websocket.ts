import { SOSMessage } from "../types";
import { SOSReceiver } from "./interface";

export class WebSocketSOSReceiver implements SOSReceiver {
  webSocketConnection: WebSocket | null = null

  constructor (private host: string = 'localhost', private port: number = 49122) {
  }

  public connect(): void {
    this.webSocketConnection = new WebSocket(`ws://${this.host}:${this.port}`);
  }

  public setOnClose(onClose: () => void): void {
    if (!this.webSocketConnection) throw Error('WebSocket connection not established')
    this.webSocketConnection.addEventListener('close', onClose)
  }

  public setOnMessage(onMessage: (event: SOSMessage) => void): void {
    if (!this.webSocketConnection) throw Error('WebSocket connection not established')
    this.webSocketConnection.addEventListener('message', (event: any) => {
      const sosMessage = JSON.parse(event.data) as SOSMessage
      onMessage(sosMessage)
    })
    
  }

  public setOnOpen(onOpen: () => void): void {
    if (!this.webSocketConnection) throw Error('WebSocket connection not established')
    this.webSocketConnection.addEventListener('open', onOpen)
  }
}