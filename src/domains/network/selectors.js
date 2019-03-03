// @flow
import { Map } from 'immutable';
import { createSelector } from 'reselect';

import { connectionTypes } from './constants';

const getNetworkState = state => state.network || Map();

export const getConnectionType = createSelector(
    [getNetworkState],
    state => state.get('connectionType', connectionTypes.UNKNOWN)
);

export const getIsOnline = createSelector(
    [getNetworkState],
    state => state.get('connectionType') !== connectionTypes.NONE
);
