// @flow
export type OwnProps = {
    children: React.Node,
};

export type DispatchProps = {
    toggleNavigation: () => void,
};

export type Props = OwnProps & DispatchProps;
