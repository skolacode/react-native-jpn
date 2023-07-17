import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'yellow', flex: 1 }}> 
      </View>

      <View style={{ backgroundColor: 'blue', flex: 1 }}> 
        
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
  heroTitle: {
    fontSize: 30,
    color: 'blue',
  },
  avatarLogo: { width: 50, height: 50 }
});
