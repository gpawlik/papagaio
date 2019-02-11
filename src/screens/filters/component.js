// @flow
import * as React from 'react';

import { Modal } from '~/components/modal';
import { Button } from '~/components/button';
import { Section } from '~/components/section';

import { messages } from '~/domains/filters/intl';

import { CategoryFilter } from './components/category';

import type { Props } from './types';

export class FiltersComponent extends React.PureComponent<Props> {
    handleOnPress = () => {
        this.props.selectFilter();
    };

    render() {
        return (
            <Modal title={messages.title} isFullWidth>
                <CategoryFilter />
                <Section title={messages.timeTitle} />
                <Section title={messages.locationTitle} />

                <Button message={messages.buttonSave} onPress={this.handleOnPress} />
            </Modal>
        );
    }
}
