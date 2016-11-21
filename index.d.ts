import {EventEmitter} from 'events'

declare module '@slack/client' {
  interface Chat {
    postMessage(channel: string, text: string, options?: { attachments: any }) : Promise<any>
  }

  interface Channels {
    join(channelName: string): Promise<any>
    create(channelName: string): Promise<any>
  }

  interface Groups {
    create(groupName: string): Promise<any>
  }

  interface IM {
    open(userId: string): Promise<any>
  }

  export class RtmClient extends EventEmitter {
    constructor(token: string, options?: any)
    start(): void
    dataStore: any
  }

  export class WebClient {
    constructor(token: string, options?: any)
    chat: Chat
    channels: Channels
    groups: Groups
    im: IM
  }

  export class IncomingWebhook {}
  export var RTM_EVENTS: any
  export var RTM_MESSAGE_SUBTYPES: any
  export var MemoryDataStore: any
  export var CLIENT_EVENTS: any
}
