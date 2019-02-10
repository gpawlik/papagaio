// @flow
import { select, takeEvery } from 'redux-saga/effects';
import { type Effect } from 'redux-saga';

import { selectFilter } from './actions';
import { getFilters } from './selectors';

import type { SelectFilterPayload } from './types';

export function* selectFilterSaga({ payload: { name } }: SelectFilterPayload): Generator<Effect, *, *> {
    const filters = yield select(getFilters);

    console.log(`filters: ${filters}`);
}

function* watchSelectFilter(): Generator<Effect, *, *> {
    yield takeEvery(selectFilter, selectFilterSaga);
}

export const homeSagas = [watchSelectFilter];
