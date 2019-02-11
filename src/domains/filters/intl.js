// @flow
import { defineMessages } from 'react-intl';

import { categories } from './constants';

export const messages = defineMessages({
    title: {
        id: 'filters.title',
        defaultMessage: 'Filters',
    },
    categoryTitle: {
        id: 'filters.category.title',
        defaultMessage: 'Category',
    },
    timeTitle: {
        id: 'filters.time.title',
        defaultMessage: 'Time',
    },
    locationTitle: {
        id: 'filters.location.title',
        defaultMessage: 'Location',
    },
    buttonSave: {
        id: 'filters.button.save',
        defaultMessage: 'Save',
    },
    [categories.ENVIRONMENT]: {
        id: 'filters.category.environment',
        defaultMessage: 'Environment',
    },
    [categories.ANIMALS]: {
        id: 'filters.category.animals',
        defaultMessage: 'Animals',
    },
    [categories.SOCIAL]: {
        id: 'filters.category.social',
        defaultMessage: 'Social',
    },
});
