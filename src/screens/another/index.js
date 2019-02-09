// @flow
import * as React from 'react';

import { navigate } from '~/navigation';
import { Screen } from '~/components/screen';
import { Button } from '~/components/button';
import { messages } from '~/domains/another/intl';

type Props = {};

export class Another extends React.PureComponent<Props> {
    handleOnPress = () => navigate.pop();

    render() {
        return (
            <Screen title={messages.title}>
                <Button onPress={this.handleOnPress} message={messages.button} />
            </Screen>
        );
    }
}
