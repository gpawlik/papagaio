// @flow
import * as React from 'react';
import type { $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';
import { TextMedium3 } from '~/components/text';

import { BackButton } from './back-button';
import { Container, SideBox } from './styles';

type Props = {|
    title?: $npm$ReactIntl$MessageDescriptor,
    backIcon?: string,
    hasLogo?: boolean,
    backAction?: () => Promise<*> | void,
|};

export class Header extends React.PureComponent<Props> {
    render() {
        const { title, hasLogo, backIcon, backAction } = this.props;

        return (
            <Container>
                <SideBox>
                    <BackButton backIcon={backIcon} backAction={backAction} />
                </SideBox>

                {title ? <TextMedium3 message={title} /> : null}

                {hasLogo ? <SVGIcon type={generalIcons.LOGO} size={36} /> : null}

                <SideBox />
            </Container>
        );
    }
}
