import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfilePage from './ProfilePage'
import TodoPage from './TodoPage'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Todo" component={TodoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}