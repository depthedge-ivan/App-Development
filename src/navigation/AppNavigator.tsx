import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

export type RootStackParamList = {
    Home: undefined
    Profile: { userId?: string}
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ title: 'Home' }}
                  />
                <Stack.Screen
                  name="Profile"
                  component={ProfileScreen}
                  options={{ title: 'Profile' }}
                  />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
