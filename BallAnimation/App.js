import React, { useRef, useState } from 'react';
import { Animated, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const BallAnimation = () => {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [direction, setDirection] = useState({ x: 100, y: 100 });
  const moveAnim = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const moveBall = () => {

    moveAnim.addListener(({ x, y }) => {
      if (x + 100 > windowWidth || x < 0) {
        setDirection({ ...direction, x: -direction.x });
      }
     
      if (y + 100 > windowHeight || y < 0) {
        setDirection({ ...direction, y: -direction.y });
      }
    });

    Animated.timing(moveAnim, {
      toValue: {
        x: moveAnim.x._value + direction.x,
        y: moveAnim.y._value + direction.y
      },
      duration: 5000,
      useNativeDriver: false
    }).start(() => moveAnim.removeAllListeners());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={moveBall}>
        <Animated.View style={[moveAnim.getLayout(), styles.ball]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'blue'
  }
});

export default BallAnimation;