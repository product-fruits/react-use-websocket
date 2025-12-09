import { resetWebSockets } from './globals';
import { resetSubscribers } from './manage-subscribers';
import { WebSocketLike } from './types';

export function assertIsWebSocket(
    webSocketInstance: WebSocketLike,
    skip?: boolean,
): asserts webSocketInstance is WebSocket {
    if (!skip && !isWebSocket(webSocketInstance)) throw new Error('');
};

export function isWebSocket(webSocketInstance: WebSocketLike | null): webSocketInstance is WebSocket {
    return webSocketInstance != null && typeof (webSocketInstance as WebSocket).send === 'function';
};

export function resetGlobalState(url?: string): void {
    resetSubscribers(url);
    resetWebSockets(url);
};

export function isEventSource(eventSourceInstance: WebSocketLike | null): eventSourceInstance is EventSource {
    return eventSourceInstance != null && !isWebSocket(eventSourceInstance);
};