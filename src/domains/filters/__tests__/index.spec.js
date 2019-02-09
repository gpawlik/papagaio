// @flow
import * as actions from '../actions';

import { homeReducer as reducer, initialState } from '../';

describe('home #reducer', () => {
    it('returns the expected state for a `selectFilter` action', () => {
        const payload = { filters: [] };
        const result = reducer(initialState, actions.selectFilter(payload));
        expect(result).toMatchInlineSnapshot(`
Immutable.Map {
  "id": 3,
}
`);
    });
});
