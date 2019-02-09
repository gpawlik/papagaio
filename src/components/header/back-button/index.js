// @flow
import * as React from 'react';

import { navigate } from '~/navigation';
import { SVGIcon } from '~/icons';
import { generalIcons } from '~/constants/icons/general';
import { Container } from './styles';

type Props = {|
    backIcon?: string,
    backAction?: () => Promise<*>,
|};

export class BackButton extends React.PureComponent<Props> {
    goBack = () => {
        const { backAction } = this.props;
        return typeof backAction === 'function' ? backAction() : navigate.pop();
    };

    render() {
        const { backIcon = generalIcons.ARROW_LEFT } = this.props;

        return (
            <Container onPress={this.goBack}>
                <SVGIcon type={backIcon} />
            </Container>
        );
    }
}
