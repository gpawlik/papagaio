// @flow
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import type { $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { navigate } from '~/navigation';
import { Text } from '~/components/text';
//import { Container } from './styles';

type Props = {|
    message: $npm$ReactIntl$MessageDescriptor,
    route: string,
|};

export class MenuItem extends React.PureComponent<Props> {
    onPress = () => navigate.push(this.props.route);

    render() {
        const { message } = this.props;
        return (
            <TouchableOpacity onPress={this.onPress}>
                <Text message={message} />
            </TouchableOpacity>
        );
    }
}
