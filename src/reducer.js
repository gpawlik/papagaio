// @flow
import { combineReducers } from 'redux';

import { homeReducer as home } from '~/domains/home';
import { userReducer as user } from '~/domains/user';
import { eventsReducer as events } from '~/domains/events';

export const reducer = combineReducers({
    home,
    user,
    events,
});
