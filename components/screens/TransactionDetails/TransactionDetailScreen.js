import React from 'react';
import { View, Text } from 'react-native';
import styles from './DetailsStyles';


const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.amount}>{`$${transaction.amount.toFixed(2)}`}</Text>
        <Text style={styles.name}>{transaction.name}</Text>
        <Text style={styles.location}>North York, ON</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailLabel}>Transaction Date</Text>
        <Text style={styles.detailValue}>{transaction.date}</Text>
      </View>
    </View>
  );
};


export default TransactionDetailScreen;
