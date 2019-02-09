// @flow
import * as selectors from '../selectors';
import { initialState } from '../';

describe('home #selector', () => {
    it('gets the correct value for getSampleId selector', () => {
        const result = selectors.getSampleId(initialState);
        expect(result).toMatchInlineSnapshot(`0`);
    });
});
