// @flow
import * as React from 'react';
import * as R from 'ramda';
import { Picker } from 'react-native';

import { navigate } from '~/navigation';
import { Modal } from '~/components/modal';
import { Button } from '~/components/button';
import { Section } from '~/components/section';

import { messages } from '~/domains/filters/intl';

import { CategoryFilter } from './components/category';

import { PickerBox, ContentBox, ButtonBox } from './styles';
import type { Props, State } from './types';

export class FiltersComponent extends React.PureComponent<Props, State> {
    state = {
        categories: this.props.categories.toJS(),
        timeSlot: this.props.timeSlot,
    };

    handleOnPress = () => {
        this.props.selectFilter({ filters: this.state });
        navigate.dismissModal();
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
                <ContentBox>
                    <CategoryFilter onChange={this.onCategoryChange} categories={categories} />

                    <Section title={messages.timeTitle}>
                        <PickerBox>
                            <Picker
                                selectedValue={this.state.timeSlot}
                                style={{ height: 250 }}
                                onValueChange={this.onTimePickerChange}
                            >
                                <Picker.Item label="Next 3 days" value={1} />
                                <Picker.Item label="Next 7 days" value={2} />
                                <Picker.Item label="Next 14 days" value={3} />
                                <Picker.Item label="Next 30 days" value={4} />
                            </Picker>
                        </PickerBox>
                    </Section>
                </ContentBox>

                <ButtonBox>
                    <Button message={messages.buttonSave} onPress={this.handleOnPress} />
                </ButtonBox>
            </Modal>
        );
    }
}
