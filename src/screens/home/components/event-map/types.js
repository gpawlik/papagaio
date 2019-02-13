// @flow
import type { Map } from 'immutable';

type Coordinates = 'latitude' | 'longitude' | 'latitudeDelta' | 'longitudeDelta';

export type StateProps = {
    mapCoordinates: Map<Coordinates, number>,
};
