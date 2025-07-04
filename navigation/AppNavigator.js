import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa le schermate
import HomeScreen from '../screens/HomeScreen';
import VilleListScreen from '../screens/VilleListScreen';
import VillaDetailScreen from '../screens/VillaDetailScreen';
import CustomizeMenuScreen from '../screens/CustomizeMenuScreen';
import SignupScreen from '../screens/SignupScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="VilleList" component={VilleListScreen} />
          <Stack.Screen name="VillaDetail" component={VillaDetailScreen} />
          <Stack.Screen name="CustomizeMenu" component={CustomizeMenuScreen} />
          <Stack.Screen name="SignUp" component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1AC3C', 
  },
});

export default AppNavigator;
