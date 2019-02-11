// @flow
import * as React from 'react';

import { navigate } from '~/navigation';
import { Screen } from '~/components/screen';
import { TextRegular2 } from '~/components/text';
import { messages } from '~/domains/about/intl';

type Props = {};

export class About extends React.PureComponent<Props> {
    handleOnPress = () => navigate.dismissModal();

    render() {
        return (
            <Screen title={messages.title} qaName="about">
                <TextRegular2 message="About screen" />
            </Screen>
        );
    }
}
