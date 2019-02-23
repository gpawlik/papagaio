// @flow
import * as React from 'react';
import { Marker } from 'react-native-maps';

import { Marker as CustomMarker } from '~/components/marker';
import { CustomCallout } from '~/components/callout';
import { Zoom } from '~/components/zoom';

import { Container, Map } from './styles';
import type { Props, MapChangeProps } from './types';

export class EventMapComponent extends React.PureComponent<Props> {
    state = {
        region: {
            latitude: this.props.mapCoordinates.get('latitude'),
            longitude: this.props.mapCoordinates.get('longitude'),
            latitudeDelta: this.props.mapCoordinates.get('latitudeDelta'),
            longitudeDelta: this.props.mapCoordinates.get('longitudeDelta'),
        },
    };

    onRegionChangeComplete = ({ latitude, longitude, latitudeDelta, longitudeDelta }: MapChangeProps) => {
        this.props.fetchEvents({
            coordinates: {
                minLat: latitude - latitudeDelta / 2,
                maxLat: latitude + latitudeDelta / 2,
                minLng: longitude - longitudeDelta / 2,
                maxLng: longitude + longitudeDelta / 2,
            },
        });
        this.setState(state => ({ region: { ...state.region, latitude, longitude } }));
    };

    onZoom = (coef: number) => {
        const { region } = this.state;
        this.zoom = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta * coef,
            longitudeDelta: region.longitudeDelta * coef,
        };
        this.setState({ region: this.zoom }, this.map.animateToRegion(this.zoom, 100));
    };

    onZoomIn = () => this.onZoom(3 / 2);

    onZoomOut = () => this.onZoom(2 / 3);

    render() {
        const { events } = this.props;
        const { region } = this.state;

        return (
            <Container>
                <Map
                    ref={ref => (this.map = ref)}
                    initialRegion={region}
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
                <Zoom onZoomIn={this.onZoomIn} onZoomOut={this.onZoomOut} />
            </Container>
        );
    }
}
