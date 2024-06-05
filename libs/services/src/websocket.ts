import { WindowApp } from 'src/types/app';
import { WebSocketWithPing } from 'src/types/services';

export default {
  connect: (url: string, baseurl = (<WindowApp>window).App.wsUrl) =>
    new WebSocket(baseurl + url) as WebSocketWithPing,
};
