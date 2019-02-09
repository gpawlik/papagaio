// @flow
import type { Effect } from 'redux-saga';
import { call, delay } from 'redux-saga/effects';
import { fetchGet } from '~/mocks/api';

export function* getEvents(templatesVersion: number): Generator<Effect, *, *> {
    // mock some delay
    yield delay(1500);
    return yield call(fetchGet, 'get-events');
}
