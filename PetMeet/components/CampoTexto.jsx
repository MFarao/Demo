import { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CampoTexto({
  value,
  onChangeText,
  placeholder = '',
  icon = 'person',
  secureTextEntry = false,
  keyboardType = 'default',
  style,
}) {
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={[styles.container, style, isActive && styles.containerActive]}>
      {value === '' && (
        <Pressable
          style={styles.placeholderContainer}
          onPress={() => inputRef.current?.focus()}
          onPressIn={() => setIsActive(true)}
          onPressOut={() => setIsActive(false)}
        >
          <MaterialIcons
            name={icon}
            size={18}
            color={isActive ? '#EC4899' : '#888'}
            style={{ marginRight: 6 }}
          />
          <Text style={[styles.placeholderText, isActive && { color: '#EC4899' }]}>
            {placeholder}
          </Text>
        </Pressable>
      )}

      <TextInput
        ref={inputRef}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder=""
        placeholderTextColor="#888"
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 50,
    height: 48,
    width: '75%',
    paddingHorizontal: 12,
    marginBottom: 17,
    backgroundColor: '#fff',
  },
  containerActive: {
    borderColor: '#EC4899',
  },
  placeholderContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    left: 25,
    top: 12,
    zIndex: 1,
  },
  placeholderText: {
    color: '#888',
    fontSize: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    height: '100%',
  },
});