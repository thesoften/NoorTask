import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './Screens/FirstScreen';
import Login from './Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='FirstScreen'>
        <Stack.Screen options={{headerShown:false}} name="FirstScreen" component={FirstScreen} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}