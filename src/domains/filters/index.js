// @flow
import { handleActions } from 'redux-actions';
import { Map as ImmutableMap, List, fromJS } from 'immutable';
import { handleReduce } from '../../utils/handle-reduce';

import { selectFilter } from './actions';

type State = ImmutableMap<string, *>;

export const initialState: State = ImmutableMap({
    filters: List(),
});

const actionHandlers = new Map([
    [selectFilter, handleReduce((state, { payload: { filters } }) => state.set('filters', fromJS(filters)))],
]);

export const filtersReducer = handleActions(actionHandlers, initialState);
