// @flow
export type StateProps = {|
    events: any,
    isLoadingEvents: boolean,
|};

export type DispatchProps = {|
    fetchEvents: () => void,
|};

export type Props = StateProps & DispatchProps;
