// @flow
import * as R from 'ramda';
import { all, fork } from 'redux-saga/effects';

import { homeSagas } from '~/domains/home/sagas';

const forkSagas = R.compose(
    all,
    R.map(fork),
    R.flatten
);

export default function* root(): Generator<*, *, *> {
    yield forkSagas([homeSagas]);
}
