// @flow
export type StateProps = {
    filters: number,
};

export type DispatchProps = {
    selectFilter: ({| offset: number, name: string |}) => void,
};

export type Props = StateProps & DispatchProps;
