import React from "react";
import {
    createStackNavigator,

} from "@react-navigation/stack";
import Services from "../screens/Services";
import ServiceDetail from "../screens/ServiceDetail";


const Stack = createStackNavigator();

export default function ViewStack() {
    return (
        <Stack.Navigator
            initialRouteName="ViewServices"
            screenOptions={{
                headerShown: false,

            }}

        >
            <Stack.Screen name="ViewServices" component={Services} />
            <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
        </Stack.Navigator>
    );
}
