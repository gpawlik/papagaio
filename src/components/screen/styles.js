// @flow
import styled from 'styled-components';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    flex: 1;
    background-color: ${selectors.white};
`;

export const Content = styled.View`
    flex: 1;
    align-items: stretch;
    padding-horizontal: ${({ isFullWidth }) => (isFullWidth ? 0 : selectors.ss6)};
`;

export const ScrollContent = styled.ScrollView.attrs({
    contentContainerStyle: {
        flex: 1,
        alignItems: 'stretch',
        paddingHorizontal: parseInt(selectors.ss6, 10),
    },
})``;
