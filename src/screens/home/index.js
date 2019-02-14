// @flow
import { connect } from 'react-redux';

import { getHasEvents } from '~/domains/events/selectors';
import { toggleNavigation } from '~/domains/ui/actions';
import { fetchEvents } from '~/domains/events/actions';

import { HomeComponent } from './component';
import type { StateProps, DispatchProps } from './types';

export const mapStateToProps = (state: any): StateProps => ({
    hasEvents: getHasEvents(state),
});

const mapDispatchToProps: DispatchProps = {
    toggleNavigation,
    fetchEvents,
};

export const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);
