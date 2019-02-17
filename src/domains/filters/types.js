// @flow
export type Action<TPayload> = {|
    type: string,
    payload: TPayload,
    error?: boolean,
|};

export type Filters = {
    categories: Array<string>,
    timeSlot: number,
};

export type SelectFilterPayload = Action<{|
    filters: Filters,
|}>;
