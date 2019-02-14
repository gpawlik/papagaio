// @flow
export type StateProps = {
    hasEvents: boolean,
};

export type DispatchProps = {
    toggleNavigation: ({ isVisible: boolean }) => void,
    fetchEvents: () => void,
};

export type Props = StateProps & DispatchProps;
