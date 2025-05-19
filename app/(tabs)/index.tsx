import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import DirectoryButton from '@/components/DirectoryButton';

const directories = [
  { label: 'You', color: '#ff6b6b' },
  { label: 'Home', color: '#4dabf7' },
  { label: 'Love', color: '#e67e22' },
  { label: 'Family', color: '#9b59b6' },
  { label: 'Friends', color: '#f06292' },
  { label: 'School', color: '#00cec9' },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header with Name and ID */}
      <Text style={styles.header}>Abhik Dushyantbhai Patel - 1258312</Text>

      {/* Buttons in Grid */}
      <View style={styles.row}>
        {directories.slice(0, 2).map((dir) => (
          <DirectoryButton key={dir.label} {...dir} onPress={() => router.push(`/messages/${dir.label}`)} />
        ))}
      </View>
      <View style={styles.row}>
        {directories.slice(2, 4).map((dir) => (
          <DirectoryButton key={dir.label} {...dir} onPress={() => router.push(`/messages/${dir.label}`)} />
        ))}
      </View>
      <View style={styles.row}>
        {directories.slice(4).map((dir) => (
          <DirectoryButton key={dir.label} {...dir} onPress={() => router.push(`/messages/${dir.label}`)} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
  },
});
