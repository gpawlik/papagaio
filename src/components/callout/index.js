// @flow
import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import * as routes from '~/constants/routes';
import { navigate } from '~/navigation';

import { Container, Title, Description } from './styles';

type Props = {
    title: *,
    description: *,
    id: string,
};

export class CustomCallout extends React.PureComponent<Props> {
    handleOpenEvent = () => navigate.push(routes.eventDetails, { id: this.props.id });

    render() {
        const { title, description } = this.props;
        console.log(this.props);
        return (
            <Container>
                <TouchableOpacity onPress={this.handleOpenEvent}>
                    <Title message={title} />
                    <Description message={description} />
                </TouchableOpacity>
            </Container>
        );
    }
}
