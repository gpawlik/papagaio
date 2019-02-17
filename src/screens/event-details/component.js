// @flow
import * as React from 'react';

import { Screen } from '~/components/screen';

import { messages } from '~/domains/events/intl';

import { TitleBox, ContentBox, Title, Description, MetaText, ContentText } from './styles';
import type { Props } from './types';

export class EventDetailsComponent extends React.PureComponent<Props> {
    render() {
        const { title, description, location, time, content } = this.props;

        return (
            <Screen title={messages.eventDetailsTitle} hasContentScroll>
                <TitleBox>
                    <Title message={title} />
                    <Description message={description} />
                    <MetaText message={location} />
                    <MetaText message={time} />
                </TitleBox>

                <ContentBox>
                    <ContentText message={content} />
                </ContentBox>
            </Screen>
        );
    }
}
