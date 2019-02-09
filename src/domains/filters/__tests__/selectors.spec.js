// @flow
import * as selectors from '../selectors';
import { initialState } from '../';

describe('home #selector', () => {
    it('gets the correct value for getFilters selector', () => {
        const result = selectors.getFilters(initialState);
        expect(result).toMatchInlineSnapshot(`0`);
    });
});
