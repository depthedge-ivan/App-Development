import React from "react";
import { RootStackParamList } from "../navigation/AppNavigator";
import { RouteProp } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";

const Tab = createBottomTabNavigator();

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type Props = {
    route: ProfileScreenRouteProp;
};

const ProfileScreen: React.FC<Props> = ({route}) => {
    return (
       <Tab.Navigator
       screenOptions={{
        headerShown: true,
        headerStyle: {
            backgroundColor: '#002507',
        },
        headerTitle: 'Hello ' + route.params.userId + '!',
        headerTitleStyle: {
            color: '#ffffff',
        },
        tabBarStyle: {
            backgroundColor: '#002507',
        },
        tabBarActiveBackgroundColor: '#ffffff',
        tabBarInactiveBackgroundColor: '#888888',
       }}
    > 
      <Tab.Screen
        name="Page 1"
        component={Page1}
        />
        <Tab.Screen
        name="Page 1"
        component={Page2}
        />
        <Tab.Screen
        name="Page 1"
        component={Page3}
        />
    </Tab.Navigator>
    );
};

export default ProfileScreen;