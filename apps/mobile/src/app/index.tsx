import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { APP_CONFIG } from '@sweepstake/shared';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to {APP_CONFIG.APP_NAME}</Text>
      <Text style={styles.subtitle}>World Cup Sweepstakes Made Simple</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});