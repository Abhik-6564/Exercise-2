import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useMessages } from '@/contexts/MessageContext';

export default function InputBar() {
  const [text, setText] = useState('');
  const { addMessage } = useMessages();

  const handleAdd = () => {
    if (text.trim()) {
      addMessage(text.trim());
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Type a message"
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginTop: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
});
