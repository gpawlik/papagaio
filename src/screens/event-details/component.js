// @flow
import * as React from 'react';
import { Linking, TouchableOpacity } from 'react-native';

import { Screen } from '~/components/screen';
import { DateBox } from '~/components/date-box';
import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';
import { selectors } from '~/theme/main';

import { messages } from '~/domains/events/intl';

import { CoverImage, ContentBox, Title, MetaBox, MetaContent, MetaText, ContentText } from './styles';
import type { Props } from './types';

export class EventDetailsComponent extends React.PureComponent<Props> {
    state = {
        isLiked: false,
    };

    openOrganizerUrl = () => Linking.openURL(this.props.organizerUrl);

    openEventUrl = () => Linking.openURL(this.props.eventUrl);

    handleToggleLike = () => this.setState(state => ({ isLiked: !state.isLiked }));

    render() {
        const { title, location, eventStart, organizer, imageUrl, content } = this.props;
        const { isLiked } = this.state;
        const stroke = isLiked ? selectors.red : selectors.slate;
        const colour = isLiked ? selectors.red : selectors.white;

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

                    <TouchableOpacity onPress={this.handleToggleLike}>
                        <SVGIcon type={generalIcons.HEART} size={30} stroke={stroke} colour={colour} />
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
