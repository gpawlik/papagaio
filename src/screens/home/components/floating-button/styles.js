// @flow
import styled from 'styled-components';

import { TextRegular3 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.TouchableOpacity`
    background-color: ${({ color }) => color || selectors.white};
    border-radius: ${selectors.br1};
    padding: ${selectors.ss4} ${selectors.ss8};
    position: absolute;
    bottom: 20;
`;

export const Text = styled(TextRegular3)`
    color: ${({ color }) => (color ? selectors.white : color)};
`;
