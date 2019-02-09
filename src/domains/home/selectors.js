// @flow
import { Map as ImmutableMap } from 'immutable';
import { createSelector } from 'reselect';

const getHome = state => state.home || ImmutableMap();

export const getSampleId = createSelector(
    [getHome],
    home => home.get('id', 0)
);
