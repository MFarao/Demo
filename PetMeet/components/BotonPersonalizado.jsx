import React, { useState } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function BotonPersonalizado({
  text,
  color = '#EC4899',
  holdColor = '#DB2777',
  textColor = '#fff',
  onPress,
  style
}) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[
        styles.button,
        {
          backgroundColor: isPressed ? holdColor : color,
        },
        style
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '75%',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});