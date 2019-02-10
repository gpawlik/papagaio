// @flow
export type StateProps = {
    isNavigationVisible: boolean,
};

export type DispatchProps = {
    hideNavigation: () => void,
};

export type Props = StateProps & DispatchProps;
