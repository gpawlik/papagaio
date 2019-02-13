// @flow
import * as React from 'react';
import { Marker } from 'react-native-maps';

import { Marker as CustomMarker } from '~/components/marker';

import { Container, Map } from './styles';
import type { StateProps as Props } from './types';
import { markers } from './constants';

export class EventMapComponent extends React.PureComponent<Props> {
    render() {
        const { mapCoordinates } = this.props;

        return (
            <Container>
                <Map
                    initialRegion={{
                        latitude: mapCoordinates.get('latitude'),
                        longitude: mapCoordinates.get('longitude'),
                        latitudeDelta: mapCoordinates.get('latitudeDelta'),
                        longitudeDelta: mapCoordinates.get('longitudeDelta'),
                    }}
                >
                    {markers.map(marker => (
                        <Marker
                            key={marker.id}
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                        >
                            <CustomMarker />
                        </Marker>
                    ))}
                </Map>
            </Container>
        );
    }
}
