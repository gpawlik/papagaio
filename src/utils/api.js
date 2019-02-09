// @flow
import { call } from 'redux-saga/effects';

const bodyFromResponse = (result: string) => {
    return result.length ? JSON.parse(result) : {};
};

function* handleResult(result, parseJson, errorMsg) {
    let body, error;

    if (parseJson) {
        body = yield call(bodyFromResponse, result);
    }

    // TODO: handle errors properly
    return [body, error];
}

export const handleApi = (fn, parseJson = true) => {
    return function* apiGenerator(...params) {
        let result;

        try {
            result = yield call(fn, ...params);
        } catch (err) {
            throw new Error(true, err.message);
        }

        if (!result) {
            return;
        }

        return yield handleResult(result, parseJson);
    };
};
