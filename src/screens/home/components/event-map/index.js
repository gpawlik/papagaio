// @flow
import { connect } from 'react-redux';

import { getEvents, getMapCoordinates } from '~/domains/events/selectors';
import type { StateProps } from './types';

import { EventMapComponent } from './component';

export const mapStateToProps = (state: any): StateProps => ({
    events: getEvents(state),
    mapCoordinates: getMapCoordinates(state),
});

export const EventMap = connect(mapStateToProps)(EventMapComponent);
