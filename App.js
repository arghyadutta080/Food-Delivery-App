import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import OrderPlacingScreen from './screens/OrderPlacingScreen';
import DeliveryScreen from './screens/DeliveryScreen';

import { store } from './store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}
            options={{ headerShown: false }} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen}
            options={{ headerShown: false }} />
          <Stack.Screen name="Basket" component={BasketScreen}
            options={{ presentation: 'modal', headerShown: false }} />
          <Stack.Screen name="OrderPlacing" component={OrderPlacingScreen}
            options={{ headerShown: false }} />
          <Stack.Screen name="Delivery" component={DeliveryScreen}
            options={{ headerShown: false }} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

