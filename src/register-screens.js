// @flow
import * as routes from '~/constants/routes';
import { Home } from '~/screens/home';
import { About } from '~/screens/about';
import { Filters } from '~/screens/filters';
import { UserInfo } from '~/screens/user/info';

export const screens: Map<string, any> = new Map();

screens.set(routes.home, Home);
screens.set(routes.about, About);
screens.set(routes.filters, Filters);
screens.set(routes.userInfo, UserInfo);
