import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import messages from '@/constants/messages';

export default function MessageScreen() {
  const { directory } = useLocalSearchParams();
  const messageList = messages[directory as string] || ["No messages found."];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{directory} Messages</Text>
      <FlatList
        data={messageList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.message}>• {item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#f4f4f4' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  message: { fontSize: 18, marginVertical: 8, color: '#333' },
});
