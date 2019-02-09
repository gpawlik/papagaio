// @flow
import * as React from 'react';

import { navigate } from '~/navigation';
import { Screen } from '~/components/screen';
import { Button } from '~/components/button';
import { Text } from '~/components/text';

import { messages } from '~/domains/filters/intl';

import type { Props } from './types';

export class FiltersComponent extends React.PureComponent<Props> {
    handleOnPress = () => {
        console.log('SAVE!');
        this.props.selectFilter();
    };

    handleBack = () => navigate.dismissModal();

    render() {
        return (
            <Screen title={messages.title} backAction={this.handleBack} isModal>
                <Text message={messages.categoryTitle} />
                <Text message={messages.timeTitle} />
                <Text message={messages.locationTitle} />

                <Button message={messages.buttonSave} onPress={this.handleOnPress} />
            </Screen>
        );
    }
}
