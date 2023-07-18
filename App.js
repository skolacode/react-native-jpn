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
      <View style={styles.profileContainer}> 
        
        <Text style={styles.labelText}>Email: 
          <Text style={styles.valueText}>iam@burhan3759.com</Text>
        </Text>
        
        <Text>Gender: <Text>Male</Text></Text>
        
        <Text>Hobby: <Text>Coding..</Text></Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'white',
  },
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'lightyellow',
    flex: 0.5,
  },
  profileContainer: {
    flex: 1,
    padding: 20
  },
  labelText: {
    fontSize: 12,
    color: '#4d4d4d'
  },
  valueText: {
    fontSize: 14,
    color: 'blue'
  }
});
