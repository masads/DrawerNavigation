import React from "react";
import {
    createStackNavigator,

} from "@react-navigation/stack";
import EditServices from "../screens/EditServices";
import EditService from "../screens/EditService";


const Stack = createStackNavigator();

export default function EditStack() {
    return (
        <Stack.Navigator
            initialRouteName="EditServices"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="EditServices" component={EditServices} />
            <Stack.Screen name="EditService" component={EditService} />
        </Stack.Navigator>
    );
}
