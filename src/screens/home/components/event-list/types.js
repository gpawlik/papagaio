// @flow
import type { Map, List } from 'immutable';

export type StateProps = {|
    events: List<Map<*, *>>,
    isLoadingEvents: boolean,
|};

export type DispatchProps = {|
    fetchEvents: () => void,
|};

export type Props = StateProps & DispatchProps;
