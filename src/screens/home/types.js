// @flow
export type StateProps = {
    id: number,
};

export type DispatchProps = {
    doSomeAction: ({| offset: number, name: string |}) => void,
};

export type Props = StateProps & DispatchProps;
