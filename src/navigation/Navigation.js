
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FirstScreen from '../Screens/FirstScreen';
import Dashboard from '../Screens/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Music from '../Screens/Music';
import Community from '../Screens/Community';
import Settings from '../Screens/Settings';

const StackNavigator = () => {

    const Tab = createBottomTabNavigator();

    function MyTabs() {
        return (
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: 'rgba(55, 27, 52, 1)'

            }}>
                <Tab.Screen options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/homewhite.png')} ></Image>
                    ),
                }}
                    name="Home" component={Dashboard}
                />
                <Tab.Screen options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/music.png')} ></Image>
                    ),
                }}
                    name="Music" component={Music}
                />
                <Tab.Screen options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/people.png')} ></Image>
                    ),
                }}
                    name="Community" component={Community}
                />
                <Tab.Screen options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/settings.png')} ></Image>
                    ),
                }}
                    name="Settings" component={Settings}
                />



            </Tab.Navigator>
        );
    }
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }} initialRouteName="FirstScreen">
                <Stack.Screen name="FirstScreen" component={FirstScreen} />
                <Stack.Screen
                    name="MyTabs"
                    component={MyTabs}
                />
                {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
