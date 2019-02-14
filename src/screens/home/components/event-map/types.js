// @flow
import type { List, Map } from 'immutable';

type Coordinates = 'latitude' | 'longitude' | 'latitudeDelta' | 'longitudeDelta';

export type StateProps = {
    events: List<Map<*, *>>,
    mapCoordinates: Map<Coordinates, number>,
};
