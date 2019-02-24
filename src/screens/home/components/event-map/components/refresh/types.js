// @flow
import type { List, Map } from 'immutable';
import type { Coordinates as CoordinatesObject } from '~/domains/filters/types';

type Coordinates = 'latitude' | 'longitude' | 'latitudeDelta' | 'longitudeDelta';

type OwnProps = {
    isActive: boolean,
    onRefresh: () => void,
};

export type StateProps = {
    events: List<Map<*, *>>,
    mapCoordinates: Map<Coordinates, number>,
};

export type DispatchProps = {
    fetchEvents: ({ coordinates: CoordinatesObject }) => void,
};

export type Props = OwnProps & StateProps & DispatchProps;
