// @flow
import * as React from 'react';
import { Linking, TouchableOpacity } from 'react-native';

import { Screen } from '~/components/screen';
import { DateBox } from '~/components/date-box';

import { messages } from '~/domains/events/intl';

import { CoverImage, ContentBox, Title, MetaBox, MetaText, ContentText } from './styles';
import type { Props } from './types';

export class EventDetailsComponent extends React.PureComponent<Props> {
    openOrganizerUrl = () => Linking.openURL(this.props.organizerUrl);

    openEventUrl = () => Linking.openURL(this.props.eventUrl);

    render() {
        const { title, location, eventStart, organizer, imageUrl, content } = this.props;

        return (
            <Screen title={messages.eventDetailsTitle} hasContentScroll isFullWidth>
                <CoverImage uri={imageUrl} />

                <Title message={title} />
                <MetaBox>
                    <DateBox time={eventStart} />
                    <MetaText message={location} />
                    <MetaText message={eventStart} />

                    <TouchableOpacity onPress={this.openOrganizerUrl}>
                        <MetaText message={organizer} />
                    </TouchableOpacity>
                </MetaBox>

                <TouchableOpacity onPress={this.openEventUrl}>
                    <MetaText message="Open on Facebook" />
                </TouchableOpacity>

                <ContentBox>
                    <ContentText message={content} />
                </ContentBox>
            </Screen>
        );
    }
}
