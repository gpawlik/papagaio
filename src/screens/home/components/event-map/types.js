// @flow
import type { Map } from 'immutable';

type Coordinates = {|
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number,
|};

export type StateProps = Map<{
    mapCoordinates: Coordinates,
}>;
