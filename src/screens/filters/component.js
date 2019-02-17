// @flow
import * as React from 'react';
import * as R from 'ramda';
import { Picker } from 'react-native';

import { Modal } from '~/components/modal';
import { Button } from '~/components/button';
import { Section } from '~/components/section';

import { categories } from '~/domains/filters/constants';
import { messages } from '~/domains/filters/intl';

import { CategoryFilter } from './components/category';

import { PickerBox } from './styles';
import type { Props, State } from './types';

export class FiltersComponent extends React.PureComponent<Props, State> {
    state = {
        categories: [categories.ENVIRONMENT, categories.ANIMALS, categories.SOCIAL],
        timeSlot: 2,
    };

    handleOnPress = () => {
        this.props.selectFilter();
    };

    onCategoryChange = (category: string) => {
        const { categories } = this.state;

        if (categories.includes(category)) {
            this.setState({ categories: R.without([category], categories) });
        } else {
            this.setState({ categories: R.append(category, categories) });
        }
    };

    onTimePickerChange = (value: number) => this.setState({ timeSlot: value });

    render() {
        const { categories } = this.state;

        return (
            <Modal title={messages.title} isFullWidth>
                <CategoryFilter onChange={this.onCategoryChange} categories={categories} />

                <Section title={messages.timeTitle}>
                    <PickerBox>
                        <Picker
                            selectedValue={this.state.timeSlot}
                            style={{ height: 250 }}
                            onValueChange={this.onTimePickerChange}
                        >
                            <Picker.Item label="Next 7 days" value={1} />
                            <Picker.Item label="Next weekend" value={2} />
                            <Picker.Item label="Next 30 days" value={3} />
                        </Picker>
                    </PickerBox>
                </Section>

                <Button message={messages.buttonSave} onPress={this.handleOnPress} />
            </Modal>
        );
    }
}
