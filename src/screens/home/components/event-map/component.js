// @flow
import * as React from 'react';

import { Container, Map } from './styles';
import type { StateProps as Props } from './types';

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
                />
            </Container>
        );
    }
}
