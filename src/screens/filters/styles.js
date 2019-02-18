// @flow
import styled from 'styled-components/native';

import { selectors } from '~/theme/main';

export const PickerBox = styled.View`
    height: 250;
`;

export const ContentBox = styled.View`
    flex: 1;
`;

export const ButtonBox = styled.View`
    padding: ${selectors.ss6};
    border-top-width: 1;
    border-top-color: ${selectors.chalk};
`;
