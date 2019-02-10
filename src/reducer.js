// @flow
import { combineReducers } from 'redux';

import { userReducer as user } from '~/domains/user';
import { authReducer as auth } from '~/domains/auth';
import { eventsReducer as events } from '~/domains/events';
import { uiReducer as ui } from '~/domains/ui';

export const reducer = combineReducers({
    user,
    auth,
    events,
    ui,
});
