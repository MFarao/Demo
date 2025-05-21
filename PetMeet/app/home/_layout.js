import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from './Perfil';
import Chats from './Chats';
import Mapa from './Mapa';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'Chats') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
        } else if (route.name === 'Mapa') {
            iconName = focused ? 'map' : 'map-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#EC4899',
        tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{ tabBarLabel: 'Perfil' }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{ tabBarLabel: 'Chats' }}
      />
      <Tab.Screen
        name="Mapa"
        component={Mapa}
        options={{ tabBarLabel: 'Mapa' }}
      />
    </Tab.Navigator>
  );
}