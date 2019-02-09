// @flow
import styled from 'styled-components';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    flex: 1;
    background-color: ${selectors.white};
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
