// @flow
import { combineReducers } from 'redux';

import { homeReducer as home } from '~/domains/home';

export const reducer = combineReducers({
    home,
});
