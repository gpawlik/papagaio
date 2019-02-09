// @flow
import * as actions from '../actions';

import { homeReducer as reducer, initialState } from '../';

describe('home #reducer', () => {
    it('returns the expected state for a `doSomeAction` action', () => {
        const payload = { offset: 3 };
        const result = reducer(initialState, actions.doSomeAction(payload));
        expect(result).toMatchInlineSnapshot(`
Immutable.Map {
  "id": 3,
}
`);
    });
});
