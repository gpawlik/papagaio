// @flow
import * as React from 'react';
import { Marker } from 'react-native-maps';

import { Marker as CustomMarker } from '~/components/marker';
import { CustomCallout } from '~/components/callout';
import { Zoom } from '~/components/zoom';

import { Container, Map } from './styles';
import type { Props, MapChangeProps } from './types';

export class EventMapComponent extends React.PureComponent<Props> {
    onRegionChangeComplete = ({ latitude, longitude, latitudeDelta, longitudeDelta }: MapChangeProps) => {
        this.props.fetchEvents({
            coordinates: {
                minLat: latitude - latitudeDelta / 2,
                maxLat: latitude + latitudeDelta / 2,
                minLng: longitude - longitudeDelta / 2,
                maxLng: longitude + longitudeDelta / 2,
            },
        });
    };

    render() {
        const { events, mapCoordinates } = this.props;

        return (
            <Container>
                <Map
                    initialRegion={{
                        latitude: mapCoordinates.get('latitude'),
                        longitude: mapCoordinates.get('longitude'),
                        latitudeDelta: mapCoordinates.get('latitudeDelta'),
                        longitudeDelta: mapCoordinates.get('longitudeDelta'),
                    }}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                    showsBuildings={false}
                    loadingEnabled
                >
                    {events.map(marker => (
                        <Marker
                            key={marker.get('id')}
                            coordinate={{
                                longitude: Number(marker.get('longitude', 0)),
                                latitude: Number(marker.get('latitude', 0)),
                            }}
                        >
                            <CustomMarker />
                            <CustomCallout
                                id={marker.get('id')}
                                title={marker.get('title')}
                                organizer={marker.get('organizer')}
                                start={marker.get('event_start')}
                                end={marker.get('event_end')}
                            />
                        </Marker>
                    ))}
                </Map>
                <Zoom onZoomIn={() => {}} onZoomOut={() => {}} />
            </Container>
        );
    }
}
