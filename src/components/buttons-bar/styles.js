// @flow
import styled from 'styled-components';

import { selectors } from '~/theme/main';

export const Container = styled.TouchableOpacity`
    background-color: ${selectors.white};
    border-bottom-width: 1;
    border-bottom-color: ${selectors.chalk};
    flex-direction: row;
`;
