// @flow
import * as React from 'react';

import { Drawer } from '~/components/drawer';
import { Text } from '~/components/text';
import { MENU_WIDTH } from './constants';
import type { Props } from './types';

//import { navigate } from '~/navigation';

export class NavigationMenuComponent extends React.Component<Props> {
    onHide = () => {
        this.props.toggleNavigation({ isVisible: false });
    };

    render() {
        const { isNavigationVisible } = this.props;

        return (
            <Drawer width={MENU_WIDTH} isVisible={isNavigationVisible} onHide={this.onHide}>
                <Text message="Hello from drawer!" />
            </Drawer>
        );
    }
}
