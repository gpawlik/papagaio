// @flow
import type { Map, List } from 'immutable';

export type StateProps = {|
    events: List<Map<*, *>>,
    isLoadingEvents: boolean,
|};

export type Props = StateProps;
