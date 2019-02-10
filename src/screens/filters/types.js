// @flow
export type StateProps = {
    filters: number,
};

export type DispatchProps = {
    selectFilter: () => void,
};

export type Props = StateProps & DispatchProps;
