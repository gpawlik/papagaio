// @flow
import styled from 'styled-components/native';

import { TextRegular3, TextRegular4, TextMedium4 } from '~/components/text';

import { selectors } from '~/theme/main';

export const TitleBox = styled.View`
    margin-vertical: ${selectors.ss5};
    padding-horizontal: ${selectors.ss6};
    border-bottom-width: ${selectors.ss1};
    border-bottom-color: ${selectors.chalk};
`;

export const Title = styled(TextMedium4)`
    margin-bottom: ${selectors.ss5};
`;

export const Description = styled(TextRegular4)`
    margin-bottom: ${selectors.ss5};
`;

export const MetaText = styled(TextRegular3)``;

export const ContentBox = styled.View`
    margin-vertical: ${selectors.ss5};
    padding-horizontal: ${selectors.ss6};
`;

export const ContentText = styled(TextRegular3)``;
