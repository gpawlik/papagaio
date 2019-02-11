// @flow
import * as React from 'react';

import { Modal } from '~/components/modal';
import { Button } from '~/components/button';
import { Section } from '~/components/section';

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
                <Section title={messages.categoryTitle} />
                <Section title={messages.timeTitle} />
                <Section title={messages.locationTitle} />

                <Button message={messages.buttonSave} onPress={this.handleOnPress} />
            </Modal>
        );
    }
}
