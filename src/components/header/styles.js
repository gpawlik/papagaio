// @flow
import styled from 'styled-components';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    height: 50;
    align-self: stretch;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-bottom-width: 1;
    border-bottom-color: ${selectors.chalk};
`;

export const SideBox = styled.View`
    width: 80;
`;
