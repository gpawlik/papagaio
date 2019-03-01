// @flow
import styled from 'styled-components/native';

import { CachedImage } from '~/components/cached-image';
import { TextRegular3, TextMedium5 } from '~/components/text';

import { selectors } from '~/theme/main';

export const CoverImage = styled(CachedImage)`
    width: 100%;
    height: 200;
`;

export const Title = styled(TextMedium5)`
    margin: ${selectors.ss5} ${selectors.ss6};
`;

export const MetaBox = styled.View`
    margin: 0 ${selectors.ss5} ${selectors.ss6};
    padding-vertical: ${selectors.ss5};
    border-top-width: 1;
    border-top-color: ${selectors.chalk};
    border-bottom-width: 1;
    border-bottom-color: ${selectors.chalk};
`;

export const MetaText = styled(TextRegular3)``;

export const ContentBox = styled.View`
    margin-vertical: ${selectors.ss5};
    padding-horizontal: ${selectors.ss6};
`;

export const ContentText = styled(TextRegular3)``;
