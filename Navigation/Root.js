import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import SecondScreen from '../Screens/SecondScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createStackNavigator();

// function HomeStackScreen() {
//     return (
//         <HomeStack.Navigator>
//             <HomeStack.Screen name='Home' component={HomeScreen} />
//             <HomeStack.Screen
//                 name='Onboard'
//                 component={OnboardingScreen}
//                 options={{ tabBarVisible: false, headerShown: false }}
//             />
//             <HomeStack.Screen name='Second' component={SecondScreen} />
//         </HomeStack.Navigator>
//     );
// }

const Tab = createBottomTabNavigator();

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 screenOptions={({ route }) => ({
//                     tabBarIcon: ({ focused, color, size }) => {
//                         let iconName;

//                         if (route.name === 'Home') {
//                             iconName = focused
//                                 ? 'ios-information-circle'
//                                 : 'ios-information-circle-outline';
//                         } else if (route.name === 'Second') {
//                             iconName = focused ? 'ios-list-box' : 'ios-list';
//                         }

//                         // You can return any component that you like here!
//                         return (
//                             <Ionicons
//                                 name={iconName}
//                                 size={size}
//                                 color={color}
//                             />
//                         );
//                     },
//                 })}
//                 tabBarOptions={{
//                     activeTintColor: 'tomato',
//                     inactiveTintColor: 'gray',
//                 }}
//             >
//                 <Tab.Screen name='Home' component={HomeStackScreen} />
//                 <Tab.Screen name='Second' component={SecondScreen} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Second') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                    // You can return any component that you like here!
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Second' component={SecondScreen} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={HomeTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Onboard'
                    component={OnboardingScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
