// @flow
const createEvent = (index: number) => {
    return {
        id: index,
        name: `Event ${index}`,
        location: 'Porto, Portugal',
        timestamp: 1549717008861,
    };
};

export const events = [...Array(5).keys()].map(index => createEvent(index));
