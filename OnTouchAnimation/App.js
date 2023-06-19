import React, { Component } from 'react';
import { Animated, View, StyleSheet, PanResponder } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.rotateX = new Animated.Value(0);
    this.rotateY = new Animated.Value(0);
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,

    });
  }

  render() {
    const rotateX = this.rotateX.interpolate({
      inputRange: [-200, 200],
      outputRange: ['-45deg', '45deg'],
    });
    const rotateY = this.rotateY.interpolate({
      inputRange: [-200, 200],
      outputRange: ['-45deg', '45deg'],
    });
    const animatedStyle = {
      transform: [{ perspective: 200 }, { rotateX }, { rotateY }],
    };
    return (
      <View style={styles.container} {...this.panResponder.panHandlers}>
        <Animated.View style={[styles.card, animatedStyle]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    backgroundColor: 'black', 
    alignItems: 'center', 
  },
  card: {
    width: 200, 
    height: 300, 
    backgroundColor: '#8ee5ee', 
  },
});

export default App;
