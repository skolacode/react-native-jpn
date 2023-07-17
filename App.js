import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heroTitle}>React Native class</Text>
      <Text>Lesson 1: PC Setup</Text>
      <Text>Lesson 2: Finally Expo works</Text>

      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: 'https://burhan3759.com/assets/my_logo.png',
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: "center"
  },
  heroTitle: {
    fontSize: 30,
    color: 'blue',
  },
  avatarLogo: { width: 50, height: 50 }
});
