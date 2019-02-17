// @flow
import type { Filters } from '~/domains/filters/types';

export type StateProps = {
    filters: number,
};

export type DispatchProps = {
    selectFilter: ({ filters: Filters }) => void,
};

export type Props = StateProps & DispatchProps;

export type State = Filters;
