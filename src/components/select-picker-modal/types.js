// @flow
import { type DescriptorWithValues } from '~/core/types/intl';

export type OptionType = {
    label: string | DescriptorWithValues,
    value: string | number,
};

export type Props = {
    selectedValue: string | number,
    initialValueIndex?: number,
    onValueChange: (string | number, number) => void,
    options: Array<OptionType>,
    isModalVisible: boolean,
    title: string | React.Element,
    onClose: () => void,
};

export type State = {
    selectedValue: string | number,
    selectedItemIndex: number,
};
