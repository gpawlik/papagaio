// @flow
import * as React from 'react';

export type OwnProps = {
    children: React.Node,
};

export type DispatchProps = {
    toggleNavigation: ({ isVisible: boolean }) => void,
};

export type Props = OwnProps & DispatchProps;
