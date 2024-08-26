import {Reducer} from "redux";
import {PeerActionType, PeerState} from "./peerTypes";

export const initialState: PeerState = {
    id: undefined,
    loading: false,
    started: false
}
/**
 * Reduces the peer state based on the given action.
 *
 * @param {PeerState} state - The current peer state.
 * @param {Action} action - The action to apply to the state.
 * @return {PeerState} The new peer state.
 */
export const PeerReducer: Reducer<PeerState> = (state = initialState, action) => {
    switch (action.type) {
        case PeerActionType.PEER_SESSION_START:
            const {id} = action
            return {...state, id, started: true} as PeerState
        case PeerActionType.PEER_SESSION_STOP:
            return {...initialState} as PeerState
        case PeerActionType.PEER_LOADING:
            const {loading} = action
            return { ...state, loading} as PeerState
        default:
            return state
    }
}
