// @flow
import * as React from 'react';

import { Modal } from '~/components/modal';
import { TextRegular2 } from '~/components/text';

import { messages } from '~/domains/event-create/intl';

export class EventCreateComponent extends React.PureComponent<void> {
    handleOnPress = () => {};

    render() {
        return (
            <Modal title={messages.title}>
                <TextRegular2 message={messages.step1Title} />
                <TextRegular2 message={messages.step2Title} />
                <TextRegular2 message={messages.step3Title} />
            </Modal>
        );
    }
}
