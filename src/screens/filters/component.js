// @flow
import * as React from 'react';

import { Modal } from '~/components/modal';
import { Button } from '~/components/button';
import { Text } from '~/components/text';

import { messages } from '~/domains/filters/intl';

import type { Props } from './types';

export class FiltersComponent extends React.PureComponent<Props> {
    handleOnPress = () => {
        console.log('SAVE!');
        this.props.selectFilter();
    };

    render() {
        return (
            <Modal title={messages.title}>
                <Text message={messages.categoryTitle} />
                <Text message={messages.timeTitle} />
                <Text message={messages.locationTitle} />

                <Button message={messages.buttonSave} onPress={this.handleOnPress} />
            </Modal>
        );
    }
}
