// @flow
import styled from 'styled-components';

import { selectors } from '~/theme/main';

export const Container = styled.TouchableOpacity`
    background-color: ${selectors.white};
    padding: ${selectors.ss6};
    border-bottom-width: ${({ isLast }) => (isLast ? 0 : 1)};
    border-bottom-color: ${selectors.chalk};
`;
