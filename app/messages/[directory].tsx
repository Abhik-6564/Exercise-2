import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { MessageProvider, useMessages } from '@/contexts/MessageContext';
import InputBar from '@/components/InputBar';
import MessageItem from '@/components/MessageItem';


function MessagePageContent() {
  const { directory } = useLocalSearchParams();
  const { messages } = useMessages();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{directory} Messages</Text>
      <InputBar />
      <FlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <MessageItem text={item} index={index} />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

export default function MessageScreen() {
  return (
    <MessageProvider>
      <MessagePageContent />
    </MessageProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4f4f4' },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
