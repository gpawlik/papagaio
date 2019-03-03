// @flow
import * as React from 'react';
import { Picker as NativePicker } from 'react-native';

import type { State, OptionType } from './types';

type Props = {
    selectedValue: $PropertyType<State, 'selectedValue'>,
    onValueChange: (itemValue: string | number, itemIndex: number) => void,
    options: OptionType[],
};

export const Picker = (props: Props) => {
    return (
        <NativePicker selectedValue={props.selectedValue} onValueChange={props.onValueChange}>
            {props.options.map(option => (
                <NativePicker.Item key={option.value} label={option.label} value={option.value} />
            ))}
        </NativePicker>
    );
};
