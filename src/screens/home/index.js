// @flow
import { connect } from 'react-redux';

import { getSampleId } from '~/domains/home/selectors';
import { getEvents, getIsLoadingEvents } from '~/domains/events/selectors';
import { doSomeAction } from '~/domains/home/actions';
import { fetchEvents } from '~/domains/events/actions';
import type { StateProps, DispatchProps } from './types';

import { HomeComponent } from './component';

export const mapStateToProps = (state: any): StateProps => ({
    id: getSampleId(state),
    events: getEvents(state),
    isLoadingEvents: getIsLoadingEvents(state),
});

const mapDispatchToProps: DispatchProps = {
    fetchEvents,
    doSomeAction,
};

export const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);
