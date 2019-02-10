// @flow
import * as React from 'react';

import { Screen } from '~/components/screen';
import { TextRegular2 } from '~/components/text';

import { messages } from '~/domains/events/intl';

import type { Props } from './types';

export class EventDetailsComponent extends React.PureComponent<Props> {
    render() {
        const { title, description, location, time, content } = this.props;

        return (
            <Screen title={messages.eventDetailsTitle} hasContentScroll>
                <TextRegular2 message={title} />
                <TextRegular2 message={description} />
                <TextRegular2 message={location} />
                <TextRegular2 message={time} />
                <TextRegular2 message={content} />
            </Screen>
        );
    }
}
