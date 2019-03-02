// @flow
import * as React from 'react';
import { Linking, TouchableOpacity } from 'react-native';

import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';

import { Screen } from '~/components/screen';
import { DateBox } from '~/components/date-box';
import { RevealBox } from '~/components/reveal-box';

import { messages } from '~/domains/events/intl';

import { Like } from './components/like';
import {
    CoverImage,
    ContentBox,
    Title,
    MetaBox,
    MetaContent,
    MetaText,
    ContentText,
    ExternalButton,
    ButtonText,
} from './styles';
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
                    <MetaContent>
                        <MetaText message={location} />
                        <MetaText message={eventStart} />

                        <TouchableOpacity onPress={this.openOrganizerUrl}>
                            <MetaText message={organizer} />
                        </TouchableOpacity>
                    </MetaContent>

                    <Like />
                </MetaBox>

                <RevealBox>
                    <ContentBox>
                        <ContentText message={content} />
                    </ContentBox>
                </RevealBox>

                <MetaBox isCentered>
                    <ExternalButton onPress={this.openEventUrl}>
                        <ButtonText message="Open on Facebook" />
                        <SVGIcon type={generalIcons.EXTERNAL_LINK} size={14} />
                    </ExternalButton>
                </MetaBox>
            </Screen>
        );
    }
}
