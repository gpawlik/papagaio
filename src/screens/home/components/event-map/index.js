// @flow
import { connect } from 'react-redux';

import { getMapCoordinates } from '~/domains/events/selectors';
import type { StateProps } from './types';

import { EventMapComponent } from './component';

export const mapStateToProps = (state: any): StateProps => ({
    mapCoordinates: getMapCoordinates(state),
});

export const EventMap = connect(mapStateToProps)(EventMapComponent);
