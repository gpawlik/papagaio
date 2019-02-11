// @flow
import styled, { css } from 'styled-components';

import { selectors } from '~/theme/main';

const containerStyle = css`
    background-color: ${selectors.white};
    padding: ${selectors.ss6};
    border-bottom-width: ${({ isLast }) => (isLast ? 0 : 1)};
    border-bottom-color: ${selectors.chalk};
`;

export const Container = styled.TouchableOpacity`
    ${containerStyle}
`;

export const RowContainer = styled.TouchableOpacity`
    ${containerStyle};
    flex-direction: row;
`;
