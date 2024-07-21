import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import TransactionsListScreen from './components/screens/TransactionList/TransactionsListScreen';
import TransactionDetailScreen from './components/screens/TransactionDetails/TransactionDetailScreen';
import SummaryScreen from './components/screens/Summary/SummaryScreen';

const StackNavigator = createStackNavigator();
const TabNavigator = createBottomTabNavigator();

const transactionMockData = [
  { id: '1', name: 'Starbucks', amount: 12, date: '2024-03-10' },
  { id: '2', name: 'Apple Store', amount: 101, date: '2024-05-11' },
  { id: '3', name: 'MacBook', amount: 2800, date: '2024-03-15' },
  { id: '4', name: 'Tim Hortons', amount: 30, date: '2024-03-23' },
  { id: '5', name: 'Samsung Galaxy note 10', amount: 2000, date: '2024-03-17' },
  { id: '6', name: 'Airlines', amount: 1700, date: '2024-03-19' },
  { id: '7', name: 'A & W Burger', amount: 500, date: '2024-06-15' },
  { id: '8', name: 'Gucci', amount: 400, date: '2024-03-25' },
  { id: '9', name: 'Airlines', amount: 1700, date: '2024-07-08' },
  { id: '10', name: 'Nike', amount: 250.00, date: '2024-09-07' },
];

const defaultScreenOptions = {
  headerStyle: { backgroundColor: '#4C97E9' },
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold' },
};

const TransactionsStackNavigator = ({ transactions }) => {
  return (
    <StackNavigator.Navigator screenOptions={defaultScreenOptions}>
      <StackNavigator.Screen name="TransactionsList">
        {props => <TransactionsListScreen {...props} transactions={transactions} />}
      </StackNavigator.Screen>
      <StackNavigator.Screen name="TransactionDetail" component={TransactionDetailScreen} />
    </StackNavigator.Navigator>
  );
};

const App = () => {
  const [transactions, setTransactions] = useState(transactionMockData);

  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Transactions') {
              iconName = 'list';
            } else if (route.name === 'Summary') {
              iconName = 'stats-chart';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: '#4C97E9',
        })}
      >
        <TabNavigator.Screen name="Transactions" options={{ headerShown: false }}>
          {props => <TransactionsStackNavigator {...props} transactions={transactions} />}
        </TabNavigator.Screen>
        <TabNavigator.Screen name="Summary" options={defaultScreenOptions}>
          {props => <SummaryScreen {...props} transactions={transactions} />}
        </TabNavigator.Screen>
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
