// @flow
import type { Effect } from 'redux-saga';
import { call } from 'redux-saga/effects';

export function* getEvents(templatesVersion: number): Generator<Effect, *, *> {
    return yield call(fetch, 'http://localhost:8080/api/v1/events', {
        headers: {
            method: 'GET',
        },
    });
}
