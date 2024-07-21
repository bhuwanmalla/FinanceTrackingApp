import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      backgroundColor: 'grey',
      padding: 20,
      alignItems: 'center',
    },
    amount: {
      fontSize: 32,
      fontWeight: 'bold',
      color: 'white',
    },
    name: {
      fontSize: 20,
      color: 'white',
    },
    location: {
      fontSize: 16,
      color: 'white',
    },
    details: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    detailLabel: {
      fontSize: 16,
      color: 'black',
      padding: 10
    },
    detailValue: {
      fontSize: 16,
      padding: 10
    },
  });

  export default styles;