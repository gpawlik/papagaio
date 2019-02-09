// @flow
export const fetchGet = (endpoint: string) => {
    if (endpoint === 'get-events') {
        return '[{ "id": 1, "name": "Event A" }]';
    }

    return '[]';
};
