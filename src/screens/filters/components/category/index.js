// @flow
import * as React from 'react';

//import { Modal } from '~/components/modal';
import { Section } from '~/components/section';
import { CheckboxCell } from '~/components/cell';

import { messages } from '~/domains/filters/intl';

import type { Props } from './types';

export class CategoryFilter extends React.PureComponent<Props> {
    state = {
        environment: true,
        animals: true,
        social: true,
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
                        title={item[0]}
                        onPress={() => this.onCategoryChange(item[0])}
                        value={item[1]}
                    />
                ))}
            </Section>
        );
    }
}
