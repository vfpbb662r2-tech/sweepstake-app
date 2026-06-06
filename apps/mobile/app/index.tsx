import { View, Text, StyleSheet } from 'react-native';
import { formatDate } from '@sweepstake/shared';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sweepstake App</Text>
        <Text style={styles.subtitle}>Welcome to the World Cup Sweepstakes App</Text>
        <Text style={styles.date}>Today: {formatDate(new Date())}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f9fafb',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#4b5563',
    marginBottom: 16,
    textAlign: 'center',
  },
  date: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
});