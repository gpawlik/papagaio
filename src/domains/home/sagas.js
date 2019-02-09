// @flow
import { select, takeEvery } from 'redux-saga/effects';
import { type Effect } from 'redux-saga';

import { doSomeAction } from './actions';
import { getSampleId } from './selectors';

import type { SomeActionPayload } from './types';

export function* someActionSaga({ payload: { name } }: SomeActionPayload): Generator<Effect, *, *> {
    const id = yield select(getSampleId);

    console.log(`${id}: ${name}`);
}

function* watchSampleSaga(): Generator<Effect, *, *> {
    yield takeEvery(doSomeAction, someActionSaga);
}

export const homeSagas = [watchSampleSaga];
