// @flow
import * as React from 'react';
import { Marker } from 'react-native-maps';

import { Marker as CustomMarker } from '~/components/marker';
import { CustomCallout } from '~/components/callout';

import { Container, Map } from './styles';
import type { StateProps as Props } from './types';

export class EventMapComponent extends React.PureComponent<Props> {
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
            </Container>
        );
    }
}
