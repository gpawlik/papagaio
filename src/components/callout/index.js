// @flow
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import moment from 'moment';

import * as routes from '~/constants/routes';
import { navigate } from '~/navigation';

import { Container, Title, Date, MetaText } from './styles';

type Props = {
    id?: string,
    title?: string,
    organizer?: string,
    start?: number,
    end?: number,
};

export class CustomCallout extends React.PureComponent<Props> {
    handleOpenEvent = () => {
        const { id } = this.props;

        if (!id) {
            return;
        }

        navigate.push(routes.eventDetails, { id });
    };

    render() {
        const { title, organizer, start, end } = this.props;
        const time = `${moment(start).format('DD/MM')}, ${moment(start).format('HH:mm')}-${moment(end).format(
            'HH:mm'
        )}`;

        return (
            <Container>
                <TouchableOpacity onPress={this.handleOpenEvent}>
                    {title ? <Title message={title} /> : null}
                    <Date message={time} />
                    {organizer ? <MetaText message={organizer} /> : null}
                </TouchableOpacity>
            </Container>
        );
    }
}
