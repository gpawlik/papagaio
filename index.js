// @flow
// Intl polyfill is required in Android.
// See https://stackoverflow.com/questions/41736735/react-native-and-intl-polyfill-required-on-android-device#41935101
import 'intl';
import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

import * as routes from '~/constants/routes';
import { navigate } from '~/navigation';
import { store } from '~/store';
import { provider } from '~/provider';
import { screens } from '~/register-screens';
import { getDimensions } from '~/utils/dimensions';

screens.forEach((ScreenComponent, key) =>
    Navigation.registerComponent(key, () => provider(ScreenComponent, store), () => ScreenComponent)
);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
        topBar: {
            visible: false,
            height: 0,
        },
        ...Platform.select({
            ios: {},
            android: {
                animations: {
                    push: {
                        content: {
                            x: {
                                from: getDimensions('window').width,
                                to: 0,
                                duration: 200,
                            },
                        },
                    },
                    pop: {
                        content: {
                            x: {
                                from: 0,
                                to: getDimensions('window').width,
                                duration: 200,
                            },
                        },
                    },
                },
            },
        }),
    });

    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: routes.home,
                            id: routes.home,
                        },
                    },
                ],
            },
        },
    });
});

Navigation.events().registerComponentDidAppearListener(({ componentId }) => {
    navigate.setCurrentScreenId(componentId);
});
