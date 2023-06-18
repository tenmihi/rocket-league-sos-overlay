import { SOSMessage } from "../types"

export interface SOSReceiver {
  connect(): void
  setOnClose(onClose: () => void): void
  setOnOpen(onOpen: () => void): void
  setOnMessage(onMessage: (event: SOSMessage) => void): void
}