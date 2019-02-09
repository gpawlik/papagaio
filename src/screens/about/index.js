// @flow
import * as React from 'react';

import { navigate } from '~/navigation';
import { Modal } from '~/components/modal';
import { Button } from '~/components/button';
import { messages } from '~/domains/about/intl';

type Props = {};

export class About extends React.PureComponent<Props> {
    handleOnPress = () => navigate.dismissModal();

    render() {
        return (
            <Modal title={messages.title}>
                <Button message={messages.buttonBack} onPress={this.handleOnPress} />
            </Modal>
        );
    }
}
