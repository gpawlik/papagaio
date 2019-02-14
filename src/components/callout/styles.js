// @flow
import styled from 'styled-components';
import { Callout } from 'react-native-maps';

import { TextRegular2, TextMedium3 } from '~/components/text';

export const Container = styled(Callout)`
    width: 180;
    padding-vertical: 8;
`;

export const Title = styled(TextMedium3)`
    margin-bottom: 5;
`;

export const Description = styled(TextRegular2)``;
