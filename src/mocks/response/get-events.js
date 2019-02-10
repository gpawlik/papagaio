// @flow
import type { Event } from '~/domains/events/types';

const createEvent = (index: number) => {
    return {
        id: index,
        title: `Event ${index}`,
        description: 'Some description of the event',
        location: 'Porto, Portugal',
        timestamp: 1549717008861,
    };
};

export const events: Array<Event> = [...Array(5).keys()].map((index: number) => createEvent(index));
