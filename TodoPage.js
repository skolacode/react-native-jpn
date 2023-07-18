import { useRef } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'


export default () => {

  const todoRef = useRef('')

  const onTextChange = (text) => { 
    todoRef.current = text
  }

  const addTodo = () => {
    console.log('Todo is clicked: ', todoRef.current)
  }

  return (
    <View style={{ marginTop: 40 }}>
      <Text>This is Todo Page</Text>

      <TextInput
        style={styles.input}
        onChangeText={onTextChange}
        placeholder="useless placeholder"
      />

      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
  button: {
    backgroundColor: '#d6d6d6',
    margin: 10,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addText: {
    fontWeight: '600',
    color: '#3e3f40'
  }
});