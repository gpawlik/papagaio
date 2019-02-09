// @flow
import styled from 'styled-components';

import { selectors } from '~/theme/main';

export const Container = styled.TouchableOpacity`
    background-color: ${selectors.chalk};
    padding: ${selectors.ss3} ${selectors.ss5};
    margin: ${selectors.ss2};
    border-radius: ${selectors.br3};
    align-items: center;
    min-width: 140;
`;
