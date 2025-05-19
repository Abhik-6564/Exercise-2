import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useMessages } from '@/contexts/MessageContext';

export default function MessageItem({ text, index }: { text: string; index: number }) {
  const { editMessage, deleteMessage } = useMessages();
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);

  const handleSave = () => {
    editMessage(index, value);
    setIsEditing(false);
  };

  return (
    <View style={styles.item}>
      {isEditing ? (
        <>
          <TextInput style={styles.input} value={value} onChangeText={setValue} />
          <Button title="Save" onPress={handleSave} />
        </>
      ) : (
        <>
          <Text style={styles.text}>{text}</Text>
          <View style={styles.buttons}>
            <Button title="Edit" onPress={() => setIsEditing(true)} />
            <Button title="Delete" color="red" onPress={() => deleteMessage(index)} />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: { fontSize: 16 },
  input: {
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 6,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});
