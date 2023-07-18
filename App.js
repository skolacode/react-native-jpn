import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Avatar Container */}
      <View style={styles.avatarContainer}> 
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: 'https://burhan3759.com/assets/my_logo.png',
          }}
        />

        <Text style={styles.nameText}>Burhan</Text>
      </View>

      {/* Pofile details container */}
      <View style={styles.profileContainer}> 
        
        <Text style={styles.labelText}>Email: 
          <Text style={styles.valueText}> iam@burhan3759.com</Text>
        </Text>
        
        <Text style={styles.labelText}>Gender: 
          <Text style={styles.valueText}> Male</Text>
        </Text>
        
        <Text style={styles.labelText}>Hobby: 
          <Text style={styles.valueText}> Coding..</Text>
        </Text>
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
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: '#faf7f8',
    borderColor: '#e2e2e2',
    borderWidth: 1,
    borderRadius: 10,
  },
  profileContainer: {
    flex: 1,
    padding: 20,
  },
  nameText: {
    fontSize: 24,
    color: '#242323',
    marginTop: 10,
    fontWeight: '600'
  },
  labelText: {
    fontSize: 16,
    color: '#4d4d4d',
    marginBottom: 10
  },
  valueText: {
    fontSize: 17,
    color: '#171717',
  }
});
