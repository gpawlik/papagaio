// @flow
import * as React from 'react';

import * as routes from '~/constants/routes';
import { navigate } from '~/navigation';
import { Screen } from '~/components/screen';
import { Button } from '~/components/button';
import { Text } from '~/components/text';
import { messages } from '~/domains/home/intl';

import { ButtonBox } from './styles';
import type { Props } from './types';

export class HomeComponent extends React.PureComponent<Props> {
    handleOnPress = () => {
        const { id, doSomeAction } = this.props;
        doSomeAction({ offset: id + 1, name: 'foo' });
    };

    handleShowFilters = () => navigate.showModal(routes.filters);

    handleShowScreen = () => navigate.push(routes.another);

    render() {
        const { id } = this.props;
        return (
            <Screen title={messages.title} hideHeader>
                <Text message={{ ...messages.counter, values: { id } }} />
                <ButtonBox>
                    <Button message={messages.button} onPress={this.handleOnPress} />
                    <Button message={messages.goToFilters} onPress={this.handleShowFilters} />
                    <Button message={messages.goToScreen} onPress={this.handleShowScreen} />
                </ButtonBox>
            </Screen>
        );
    }
}
