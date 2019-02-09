// @flow
import { handleActions } from 'redux-actions';
import { Map as ImmutableMap, type Map as ImmutableMapType } from 'immutable';
import { handleReduce } from '../../utils/handle-reduce';

import { doSomeAction } from './actions';

type State = ImmutableMapType<string, *>;

export const initialState: State = ImmutableMap({
    id: 1,
});

const actionHandlers = new Map([
    [doSomeAction, handleReduce((state, { payload: { offset } }) => state.set('id', offset))],
]);

export const homeReducer = handleActions(actionHandlers, initialState);
