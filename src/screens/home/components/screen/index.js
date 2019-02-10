// @flow
import { connect } from 'react-redux';

import { toggleNavigation } from '~/domains/ui/actions';

import { HomeScreenComponent } from './component';
import type { DispatchProps } from './types';

const mapDispatchToProps: DispatchProps = {
    toggleNavigation,
};

export const HomeScreen = connect(
    null,
    mapDispatchToProps
)(HomeScreenComponent);
