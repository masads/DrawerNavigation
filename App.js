

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Service from './screens/Services';
import AddService from './screens/AddService';

import EditStack from './stack/EditStack';
import DeleteServices from './screens/DeleteServices';
import ViewStack from './stack/ViewStack';
const Drawer = createDrawerNavigator();


const App: () => Node = () => {


  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar

      />
      <NavigationContainer >
        <Drawer.Navigator initialRouteName="Services" >
          <Drawer.Screen name="Services" component={ViewStack} />
          <Drawer.Screen name="Add Service" component={AddService} />
          <Drawer.Screen name="Edit Service" component={EditStack} />
          <Drawer.Screen name="Delete Service" component={DeleteServices} />
        </Drawer.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;
