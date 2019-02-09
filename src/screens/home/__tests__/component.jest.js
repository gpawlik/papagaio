// @flow
import * as React from 'react';
import renderer from 'react-test-renderer';

import { HomeComponent } from '../component';

jest.mock('~/components/screen', () => ({
    Screen: 'Screen',
}));

jest.mock('~/components/button', () => ({
    Button: 'Button',
}));

jest.mock('~/components/text', () => ({
    Text: 'Text',
}));

jest.mock('~/screens/home/styles', () => ({
    ButtonBox: 'ButtonBox',
}));

const initialProps = {
    id: 5,
    doSomeAction: () => {},
};

const testComponent = props => {
    const finalProps = {
        ...initialProps,
        ...props,
    };

    return renderer.create(<HomeComponent {...finalProps} />);
};

describe('<HomeComponent />', () => {
    it('renders correctly with default props', () => {
        const component = testComponent().toJSON();

        expect(component).toMatchInlineSnapshot(`
<Screen
  hideHeader={true}
  title={
    Object {
      "defaultMessage": "Home",
      "id": "home.title",
    }
  }
>
  <Text
    message={
      Object {
        "defaultMessage": "Sample value: {id}",
        "id": "home.counter",
        "values": Object {
          "id": 5,
        },
      }
    }
  />
  <ButtonBox>
    <Button
      message={
        Object {
          "defaultMessage": "Add +",
          "id": "home.button",
        }
      }
      onPress={[Function]}
    />
    <Button
      message={
        Object {
          "defaultMessage": "Go to Modal",
          "id": "home.go-to-modal",
        }
      }
      onPress={[Function]}
    />
    <Button
      message={
        Object {
          "defaultMessage": "Go to Screen",
          "id": "home.go-to-screen",
        }
      }
      onPress={[Function]}
    />
  </ButtonBox>
</Screen>
`);
    });
});
