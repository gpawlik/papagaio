// @flow
import { combineReducers } from 'redux';

import { authReducer as auth } from '~/domains/auth';
import { eventsReducer as events } from '~/domains/events';
import { filtersReducer as filters } from '~/domains/filters';
import { uiReducer as ui } from '~/domains/ui';
import { userReducer as user } from '~/domains/user';

export const reducer = combineReducers({
    auth,
    events,
    filters,
    ui,
    user,
});
