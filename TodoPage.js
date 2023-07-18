import { useRef, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'


export default () => {


  const [todoList, setTodoList] = useState([])

  const todoRef = useRef('')

  const onTextChange = (text) => { 
    todoRef.current = text
  }

  const addTodo = () => {
    console.log('Todo is clicked: ', todoRef.current)
    // spread operator
    setTodoList([todoRef.current, ...todoList])

    // setTodoList(['RN', 'java', 'php'])
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

      <Text style={{ marginLeft: 20, marginTop: 10, marginBottom: 10 }}>Todo List</Text>

      {
        todoList.map((value, index) => (
          <Text 
            style={{ margin: 5, marginLeft: 20, padding: 5 }} 
            key={index}
          >
            {index+1} - {value}
          </Text>
        ))
      }
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