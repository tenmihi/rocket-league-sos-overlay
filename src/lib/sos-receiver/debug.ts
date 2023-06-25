import { debugUpdateState } from "../const/debug-update-state";
import { SOSMessage } from "../types";
import { SOSReceiver } from "./interface";

export class DebugSOSReceiver implements SOSReceiver {
  connect(): void {
  }
  setOnClose(onClose: () => void): void {
  }
  setOnOpen(onOpen: () => void): void {
  }
  setOnMessage(onMessage: (event: SOSMessage) => void): void {
    onMessage(debugUpdateState)
  }

}