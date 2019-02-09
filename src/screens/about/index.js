// @flow
import * as React from 'react';

import * as routes from '~/constants/routes';
import { navigate } from '~/navigation';
import { Screen } from '~/components/screen';
import { Button } from '~/components/button';
import { messages } from '~/domains/about/intl';

type Props = {};

export class About extends React.PureComponent<Props> {
    handleOnPress = () => navigate.dismissModal();

    handleShowScreen = () => navigate.push(routes.another);

    handleBack = () => navigate.dismissModal();

    render() {
        return (
            <Screen title={messages.title} backAction={this.handleBack} isModal>
                <Button message={messages.buttonBack} onPress={this.handleOnPress} />
                <Button message={messages.buttonAnother} onPress={this.handleShowScreen} />
            </Screen>
        );
    }
}
