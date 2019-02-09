// @flow
import { combineReducers } from 'redux';

import { homeReducer as home } from '~/domains/home';
import { userReducer as user } from '~/domains/user';

export const reducer = combineReducers({
    home,
    user,
});
