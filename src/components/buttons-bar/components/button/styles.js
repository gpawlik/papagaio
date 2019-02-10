// @flow
import styled from 'styled-components';

import { selectors } from '~/theme/main';

export const Container = styled.TouchableOpacity`
    background-color: ${selectors.white};
    padding-vertical: ${selectors.ss6};
    border-right-width: ${({ isLast }) => (isLast ? 0 : 1)};
    border-right-color: ${selectors.chalk};
    align-items: center;
    flex: 1;
`;
