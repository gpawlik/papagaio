// @flow
import * as R from 'ramda';

export const getIdFromProps = (_: State, props: any) => R.propOr('', 'id');
