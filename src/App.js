import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransApp from './TransApp';
import BusLinkHome from './busLink/BusLinkHome';
import BusLinkAbastecer from './busLink/BusLinkAbastecer.js';
import BusLinkLinhas from './busLink/BusLinkLinhas.js';
import BusLinkMapa from './busLink/BusLinkMapa.js';
import AquaLinkHome from './aqualink/AquaLinkHome';
import AquaLinkAbastecer from './aqualink/AquaLinkAbastecer.js';
import AquaLinkLinhas from './aqualink/AquaLinkLinhas.js';
import AquaLinkMapa from './aqualink/AquaLinkMapa.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TransApp"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="TransApp"
          component={TransApp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BusLink"
          component={BusLinkHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Abastecer BusLink"
          component={BusLinkAbastecer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Linhas BusLink"
          component={BusLinkLinhas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mapa BusLink"
          component={BusLinkMapa}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AquaLink"
          component={AquaLinkHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Abastecer AquaLink"
          component={AquaLinkAbastecer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Linhas AquaLink"
          component={AquaLinkLinhas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mapa AquaLink"
          component={AquaLinkMapa}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
