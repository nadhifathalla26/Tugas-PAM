import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BarcodeScanner from './src/BarcodePage';
import CreateProfile from './src/CreateProfilePage';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#004161',
          headerShown: false,
          tabBarStyle: { position: 'absolute' },
          tabBarStyle: { height: 70 },
        }}>
          
        <Tab.Screen
          name="Scan Barcode"
          component={BarcodeScanner}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="qrcode" size={30} color={color}/>
            ),
          }} 
        />

        <Tab.Screen
          name="Create Your Profile"
          component={CreateProfile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" size={30} color={color}/>
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;