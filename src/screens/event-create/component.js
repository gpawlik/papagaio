// @flow
import * as React from 'react';

import { Modal } from '~/components/modal';
import { Text } from '~/components/text';

import { messages } from '~/domains/event-create/intl';

export class EventCreateComponent extends React.PureComponent<void> {
    handleOnPress = () => {};

    render() {
        return (
            <Modal title={messages.title}>
                <Text message={messages.step1Title} />
                <Text message={messages.step2Title} />
                <Text message={messages.step3Title} />
            </Modal>
        );
    }
}
