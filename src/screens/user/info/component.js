// @flow
import * as React from 'react';

import { Screen } from '~/components/screen';
import { Button } from '~/components/button';
import { Text } from '~/components/text';

import { messages } from '~/domains/user/intl';

import type { Props } from './types';

export class UserInfoComponent extends React.PureComponent<Props> {
    handleOnPress = () => {
        console.log('TOGGLE!');
        this.props.changeActive({ value: !this.props.isActive });
    };

    render() {
        const { firstName, secondName, location, isActive } = this.props;
        return (
            <Screen title={messages.title}>
                <Text message={messages.infoFirstName} />
                <Text message={firstName} />
                <Text message={messages.infoSecondName} />
                <Text message={secondName} />
                <Text message={messages.infoLocation} />
                <Text message={location} />
                <Text message={messages.infoActive} />
                <Text message={`${isActive}`} />

                <Button message={messages.buttonToggle} onPress={this.handleOnPress} />
            </Screen>
        );
    }
}
