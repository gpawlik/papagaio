// @flow
import * as React from 'react';
import styled from 'styled-components';
import { selectors } from '~/theme/main';
import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';

const Tick = styled(SVGIcon).attrs(({ isOn }: { isOn: boolean }) => ({
    type: isOn ? generalIcons.MULTI_CHOICE_ON : generalIcons.MULTI_CHOICE_OFF,
    colour: selectors.slate,
}))``;

const Touch = styled.TouchableOpacity`
    padding: ${selectors.ss2};
`;

type Props = {|
    value: boolean,
    onValueChange: boolean => void,
|};

const hitSlop = { top: 10, bottom: 10, left: 10, right: 10 };

export class Checkbox extends React.PureComponent<Props> {
    onValueChange = () => this.props.onValueChange(!this.props.value);

    render() {
        const { value } = this.props;
        return (
            <Touch onPress={this.onValueChange} hitSlop={hitSlop}>
                <Tick isOn={value} />
            </Touch>
        );
    }
}
