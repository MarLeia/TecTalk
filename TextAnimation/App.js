import React, { useRef } from 'react';
import { Animated, View, StyleSheet, Text, Button } from 'react-native';

const FadeInText = () => {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true
    }).start();
  };

  return (
    <View style={styles.container}>
      <Button title="Einblenden" onPress={fadeIn} />
      <Button title="Ausblenden" onPress={fadeOut} />
      <Animated.Text style={[styles.text, {opacity: fadeAnim}]}>
        Hallo, wir machen einen TecTalk!
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
});

export default FadeInText;






