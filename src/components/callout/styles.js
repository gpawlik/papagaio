// @flow
import styled from 'styled-components';
import { Callout } from 'react-native-maps';

import { TextRegular2, TextMedium3 } from '~/components/text';
import { selectors } from '~/theme/main';

export const Container = styled(Callout)`
    width: 260;
    padding-vertical: ${selectors.ss2};
`;

export const Title = styled(TextMedium3)`
    margin-bottom: ${selectors.ss3};
`;

export const Date = styled(TextRegular2)``;

export const MetaText = styled(TextRegular2)`
    color: ${selectors.midnight};
`;
