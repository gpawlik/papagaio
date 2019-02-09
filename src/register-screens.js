// @flow
import * as routes from '~/constants/routes';
import { Home } from '~/screens/home';
import { About } from '~/screens/about';
import { Another } from '~/screens/another';
import { Filters } from '~/screens/filters';

export const screens: Map<string, any> = new Map();

screens.set(routes.home, Home);
screens.set(routes.about, About);
screens.set(routes.another, Another);
screens.set(routes.filters, Filters);
