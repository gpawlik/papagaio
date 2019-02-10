// @flow
import { Animated, Easing, type AnimatedValue } from 'react-native';

export const ANIMATION_DURATION = 200;

type Props = {
    isVisible: boolean,
    width: number,
    animatedValue: AnimatedValue,
};

export default ({ isVisible, width, animatedValue }: Props) =>
    Animated.timing(animatedValue, {
        toValue: isVisible ? width : 0,
        easing: Easing.inOut(Easing.quad),
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
    }).start();
