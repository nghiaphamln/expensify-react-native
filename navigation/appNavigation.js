import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import AddLedgerScreen from '../screens/AddLedgerScreen';
import LedgerExpensesScreen from '../screens/LedgerExpensesScreen';
import AddExpenseScreen from "../screens/AddExpenseScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddLedger"
          component={AddLedgerScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="LedgerExpenses"
          component={LedgerExpensesScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddExpense"
          component={AddExpenseScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
