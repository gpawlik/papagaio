// @flow
import { call, put, takeEvery } from 'redux-saga/effects';
import { type Effect } from 'redux-saga';

import { handleApi } from '~/utils/api';

import * as api from './api';
import { fetchEvents, receiveEvents } from './actions';

export function* getEventsSaga(): Generator<Effect, *, *> {
    const [events = {}] = yield call(handleApi(api.getEvents));

    yield put(receiveEvents({ events }));
}

function* watchFetchEvents(): Generator<Effect, *, *> {
    yield takeEvery(fetchEvents, getEventsSaga);
}

export const eventsSagas = [watchFetchEvents];
