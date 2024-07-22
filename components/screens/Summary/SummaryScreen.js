import React from 'react';
import { View, Text } from 'react-native';
import styles from './SummaryStyles';

const SummaryScreen = ({ transactions }) => {
  const totalExpense = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  let highExpense = transactions[0];
  let lowExpense = transactions[0];

  transactions.forEach(transaction => {
    if (transaction.amount > highExpense.amount) {
      highExpense = transaction;
    }
    if (transaction.amount < lowExpense.amount) {
      lowExpense = transaction;
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Total Transaction</Text>
        <Text style={styles.value}>{transactions.length}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Total Expense</Text>
        <Text style={styles.value}>{`$${totalExpense.toFixed(2)}`}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.highExpenseLabel}>High Spending</Text>
        <Text style={styles.value}>{`${highExpense.name}`}</Text>
        <Text style={styles.value}>{`$${highExpense.amount.toFixed(2)}`}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.lowExpenseLabel}>Low Spending</Text>
        <Text style={styles.value}>{`${lowExpense.name}`}</Text>
        <Text style={styles.value}>{`$${lowExpense.amount.toFixed(2)}`}</Text>
      </View>
    </View>
  );
};

export default SummaryScreen;
