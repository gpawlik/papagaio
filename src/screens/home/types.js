// @flow
export type StateProps = {
    id: number,
    events: any,
    isLoadingEvents: boolean,
};

export type DispatchProps = {
    fetchEvents: () => void,
    doSomeAction: ({| offset: number, name: string |}) => void,
};

export type Props = StateProps & DispatchProps;
