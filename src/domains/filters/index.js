// @flow
import { handleActions } from 'redux-actions';
import { Map as ImutableMap, List } from 'immutable';
import { handleReduce } from '../../utils/handle-reduce';

import { selectFilter } from './actions';

type State = ImutableMap<string, *>;

export const initialState: State = ImutableMap({
    filters: List(),
});

const actionHandlers = new Map([
    [selectFilter, handleReduce((state, { payload: { filters } }) => state.set('filters', filters))],
]);

export const filtersReducer = handleActions(actionHandlers, initialState);
