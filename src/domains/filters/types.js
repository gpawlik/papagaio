// @flow
import type { List } from 'immutable';

export type Action<TPayload> = {|
    type: string,
    payload: TPayload,
    error?: boolean,
|};

export type Filters = {
    categories: List<string>,
    timeSlot: number,
};

export type SelectFilterPayload = Action<{|
    filters: Filters,
|}>;
