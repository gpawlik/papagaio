// @flow
import * as React from 'react';
//import { TouchableOpacity } from 'react-native';
import type { $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { TextRegular2 } from '~/components/text';
import { Container } from './styles';

type Props = {|
    message: $npm$ReactIntl$MessageDescriptor,
    route: string,
    onPress: string => void,
|};

export class MenuItem extends React.PureComponent<Props> {
    onPress = () => this.props.onPress(this.props.route);

    render() {
        const { message } = this.props;
        return (
            <Container onPress={this.onPress}>
                <TextRegular2 message={message} />
            </Container>
        );
    }
}
