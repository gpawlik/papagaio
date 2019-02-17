// @flow
export type StateProps = {
    filters: number,
};

export type DispatchProps = {
    selectFilter: () => void,
};

export type Props = StateProps & DispatchProps;

export type State = {
    categories: Array<string>,
    timeSlot: number,
};
