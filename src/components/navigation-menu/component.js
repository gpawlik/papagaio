// @flow
import * as React from 'react';

import { Drawer } from '~/components/drawer';
import { menuItems, MENU_WIDTH } from './constants';
import { MenuItem } from './components/item';
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
                {menuItems.map(({ id, message, route }) => (
                    <MenuItem key={id} message={message} route={route} />
                ))}
            </Drawer>
        );
    }
}
