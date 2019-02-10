// @flow
import * as React from 'react';

import { Screen } from '~/components/screen';
import { Text } from '~/components/text';

import { messages } from '~/domains/events/intl';

import type { Props } from './types';

export class EventDetailsComponent extends React.PureComponent<Props> {
    render() {
        const { title, description, location, time, content } = this.props;

        return (
            <Screen title={messages.eventDetailsTitle} hasContentScroll>
                <Text message={title} />
                <Text message={description} />
                <Text message={location} />
                <Text message={time} />
                <Text message={content} />
            </Screen>
        );
    }
}
