const wsUri = "ws://192.168.178.175:9000/ws"
let websocket: WebSocket

export const init = () => {
    websocket = new WebSocket(wsUri, 'protocolOne');
    websocket.onopen = function (evt: Event) { onOpen(evt) };
    websocket.onclose = function (evt: Event) { onClose(evt) };
    websocket.onerror = function (evt: Event) { onError(evt) };

    return websocket;
}

function onOpen(evt: Event) {
    console.log('Socket Connection opened')
}

function onClose(evt: Event) {
    console.log("closing connection")
}

function onError(evt: Event) {
    console.error(evt)
}