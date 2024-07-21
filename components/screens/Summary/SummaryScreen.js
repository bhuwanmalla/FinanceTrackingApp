import React from 'react';
import { View, Text } from 'react-native';
import styles from './SummaryStyles';

const SummaryScreen = ({ transactions }) => {
  const totalExpense = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  let highSpending = transactions[0];
  let lowSpending = transactions[0];

  transactions.forEach(transaction => {
    if (transaction.amount > highSpending.amount) {
      highSpending = transaction;
    }
    if (transaction.amount < lowSpending.amount) {
      lowSpending = transaction;
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Transactions</Text>
        <Text style={styles.value}>{transactions.length}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.value}>{`$${totalExpense.toFixed(2)}`}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.highSpendingLabel}>High Spending</Text>
        <Text style={styles.value}>{`${highSpending.name}`}</Text>
        <Text style={styles.value}>{`$${highSpending.amount.toFixed(2)}`}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.lowSpendingLabel}>Low Spending</Text>
        <Text style={styles.value}>{`${lowSpending.name}`}</Text>
        <Text style={styles.value}>{`$${lowSpending.amount.toFixed(2)}`}</Text>
      </View>
    </View>
  );
};

export default SummaryScreen;
