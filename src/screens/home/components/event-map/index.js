// @flow
import * as React from 'react';
import MapView from 'react-native-maps';

import { TextRegular2 } from '~/components/text';

type Props = {};

export class EventMap extends React.PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                <TextRegular2 message="MAP" />
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </React.Fragment>
        );
    }
}
