// @flow
import * as React from 'react';
import { Linking, TouchableOpacity } from 'react-native';

import { Screen } from '~/components/screen';

import { messages } from '~/domains/events/intl';

import { CoverImage, TitleBox, ContentBox, Title, Description, MetaText, ContentText } from './styles';
import type { Props } from './types';

export class EventDetailsComponent extends React.PureComponent<Props> {
    openOrganizerUrl = () => Linking.openURL(this.props.organizerUrl);

    openEventUrl = () => Linking.openURL(this.props.eventUrl);

    render() {
        const { title, description, location, time, organizer, content } = this.props;

        return (
            <Screen title={messages.eventDetailsTitle} hasContentScroll isFullWidth>
                <CoverImage uri="https://scontent.fopo1-1.fna.fbcdn.net/v/t1.0-9/50851667_2080230002068743_2521933452509446144_n.jpg?_nc_cat=100&_nc_ht=scontent.fopo1-1.fna&oh=7d4d4546afd33b5b0ad0744c83b83fb8&oe=5CDFCF14" />

                <TitleBox>
                    <Title message={title} />
                    <Description message={description} />
                    <MetaText message={location} />
                    <MetaText message={time} />

                    <TouchableOpacity onPress={this.openOrganizerUrl}>
                        <MetaText message={organizer} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.openEventUrl}>
                        <MetaText message="Open on Facebook" />
                    </TouchableOpacity>
                </TitleBox>

                <ContentBox>
                    <ContentText message={content} />
                </ContentBox>
            </Screen>
        );
    }
}
