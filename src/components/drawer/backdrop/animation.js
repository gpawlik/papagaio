// @flow
import { Animated, Easing } from 'react-native';

type Props = {
    isVisible: boolean,
    opacity: number,
};

export default ({ isVisible, opacity }: Props, onAnimationEnd: () => void) =>
    Animated.timing(opacity, {
        toValue: isVisible ? 0.5 : 0,
        easing: Easing.inOut(Easing.quad),
        duration: 200,
        useNativeDriver: true,
    }).start(onAnimationEnd);
