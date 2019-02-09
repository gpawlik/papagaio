// @flow
import { connect } from 'react-redux';

import { getFilters } from '~/domains/filters/selectors';
import { selectFilter } from '~/domains/filters/actions';
import type { StateProps, DispatchProps } from './types';

import { FiltersComponent } from './component';

export const mapStateToProps = (state: any): StateProps => ({
    filters: getFilters(state),
});

const mapDispatchToProps: DispatchProps = {
    selectFilter,
};

export const Filters = connect(
    mapStateToProps,
    mapDispatchToProps
)(FiltersComponent);
