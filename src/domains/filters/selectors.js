// @flow
import { Map, List } from 'immutable';
import { createSelector } from 'reselect';

const getFiltersState = state => state.filters || Map();

export const getFilters = createSelector(
    [getFiltersState],
    state => state.get('filters', List())
);
