import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './ListStyles';
import Icon from 'react-native-vector-icons/Ionicons';


const TransactionsListScreen = ({ navigation, transactions }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <View style={styles.list}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{`$${item.amount.toFixed(2)}`}</Text>
            </View>
            <Icon style={{ paddingLeft: 10 }} name="chevron-forward" size={20} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TransactionsListScreen;
