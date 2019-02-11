// @flow
import * as React from 'react';

import { Modal } from '~/components/modal';
import { Button } from '~/components/button';
import { Section } from '~/components/section';
//import { Checkbox } from '~/components/checkbox';

import { messages } from '~/domains/filters/intl';

import { CategoryFilter } from './components/category';

import type { Props } from './types';

export class FiltersComponent extends React.PureComponent<Props> {
    state = {
        // categories: {
        //     environment: true,
        //     animals: true,
        //     social: true,
        // },
    };

    handleOnPress = () => {
        this.props.selectFilter();
    };

    // onCategoryChange = (key: string) => {
    //     const { categories } = this.state;
    //     console.log('key', key);
    //     this.setState({ categories: { ...categories, ...{ [categories[key]]: !categories[key] } } });
    // };

    render() {
        // const { categories } = this.state;

        return (
            <Modal title={messages.title}>
                <CategoryFilter />
                <Section title={messages.timeTitle} />
                <Section title={messages.locationTitle} />

                <Button message={messages.buttonSave} onPress={this.handleOnPress} />
            </Modal>
        );
    }
}
