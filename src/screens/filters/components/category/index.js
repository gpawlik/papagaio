// @flow
import * as React from 'react';

import { Section } from '~/components/section';
import { CheckboxCell } from '~/components/cell';

import { messages } from '~/domains/filters/intl';
import { categories } from '~/domains/filters/constants';

import type { Props, State } from './types';

export class CategoryFilter extends React.PureComponent<Props, State> {
    state = {
        [categories.ENVIRONMENT]: true,
        [categories.ANIMALS]: true,
        [categories.SOCIAL]: true,
    };

    onCategoryChange = (key: string) => {
        const { state } = this;
        this.setState({ [key]: !state[key] });
    };

    render() {
        const { state } = this;

        return (
            <Section title={messages.categoryTitle}>
                {Object.entries(state).map(item => (
                    <CheckboxCell
                        key={item[0]}
                        title={messages[item[0]]}
                        onPress={() => this.onCategoryChange(item[0])}
                        value={!!item[1]}
                    />
                ))}
            </Section>
        );
    }
}
