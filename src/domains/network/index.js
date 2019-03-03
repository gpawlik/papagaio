// @flow
import { handleActions } from 'redux-actions';
import { Map as ImmutableMap } from 'immutable';

import { handleReduce } from '~/utils/handle-reduce';

import { setConnectionType } from './actions';
import { connectionTypes, effectiveConnectionTypes } from './constants';

type State = ImmutableMap<string, *>;

export const initialState: State = ImmutableMap({
    connectionType: connectionTypes.UNKNOWN,
    effectiveConnectionType: effectiveConnectionTypes.UNKNOWN,
});

const actionHandlers = new Map([
    [setConnectionType, handleReduce((state, { payload }) => state.set('connectionType', payload))],
]);

export const networkReducer = handleActions(actionHandlers, initialState);
