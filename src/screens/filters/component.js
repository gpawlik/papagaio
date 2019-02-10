// @flow
import * as React from 'react';

import { Modal } from '~/components/modal';
import { Button } from '~/components/button';
import { TextRegular2 } from '~/components/text';

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
                <TextRegular2 message={messages.categoryTitle} />
                <TextRegular2 message={messages.timeTitle} />
                <TextRegular2 message={messages.locationTitle} />

                <Button message={messages.buttonSave} onPress={this.handleOnPress} />
            </Modal>
        );
    }
}
