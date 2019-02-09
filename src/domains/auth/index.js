// @flow
import { handleActions } from 'redux-actions';
import { Map as ImutableMap } from 'immutable';

type State = ImutableMap<string, *>;

export const initialState: State = ImutableMap({
    isLoggedIn: false,
});

const actionHandlers = new Map([]);

export const authReducer = handleActions(actionHandlers, initialState);
