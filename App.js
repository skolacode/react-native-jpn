import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Avatar Container */}
      <View style={styles.avatarContainer}> 
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />

        <Text>Burhan</Text>
      </View>

      {/* Pofile details container */}
      <View style={{ backgroundColor: 'blue' }}> 
        
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#f2f2f2',
  },
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 30,
    color: 'blue',
  },
  avatarLogo: { width: 50, height: 50 }
});
