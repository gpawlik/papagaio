// @flow
import { handleActions } from 'redux-actions';
import { Map as ImmutableMap } from 'immutable';

type State = ImmutableMap<string, *>;

export const initialState: State = ImmutableMap({
    alert: ImmutableMap({
        id: 1,
        message: 'You are so offline.',
        type: 'ERROR',
    }),
});

const actionHandlers = new Map([]);

export const alertsReducer = handleActions(actionHandlers, initialState);
