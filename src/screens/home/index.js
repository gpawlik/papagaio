// @flow
import { connect } from 'react-redux';

import { getSampleId } from '~/domains/home/selectors';
import { doSomeAction } from '~/domains/home/actions';
import type { StateProps, DispatchProps } from './types';

import { HomeComponent } from './component';

export const mapStateToProps = (state: any): StateProps => ({
    id: getSampleId(state),
});

const mapDispatchToProps: DispatchProps = {
    doSomeAction,
};

export const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);
