import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
  } from 'react-native-reanimated';
import { logo } from '../assets';
import { Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';


const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const AnimatedLogo = () => {
  const scaleValue = useSharedValue(1); // Initialize the shared value

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleValue.value }], // Apply the animated scale value
    };
  });

  const startAnimation = () => {
    scaleValue.value = withTiming(
      1.2,
      {
        duration: 1000,
        easing: Easing.out(Easing.bounce), // Use bounce easing function
      },
      () => {
        // After scaling up, scale down with bounce effect
        scaleValue.value = withTiming(
          1,
          {
            duration: 300,
            easing: Easing.inOut(Easing.ease),
          }
        );
      }
    );
  };



  return (
    <AnimatedPressable
      style={[styles.logoImage, animatedStyle]}
      onLongPress={startAnimation}
    >
      <Image style={styles.logoImage} source={logo} />
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
    logoImage: {
        resizeMode: 'contain',
        width: '100%',
    },
})

export default AnimatedLogo;
