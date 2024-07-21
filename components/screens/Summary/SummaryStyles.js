import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      padding: 15,
      backgroundColor: '#fff',
    },
    section: {
      marginTop: 10,
      flexDirection: "row",
      justifyContent: 'space-between',
      borderBottomWidth: 1
    },
    label: {
      marginTop: 10,
      fontSize: 16,
    },
    highSpendingLabel: {
      fontSize: 16,
      marginTop: 10,
      fontWeight: 'bold',
      color: '#4169E1',
    },
    lowSpendingLabel: {
      fontSize: 16,
      marginTop: 10,
      fontWeight: 'bold',
      color: '#4169E1',
    },
    value: {
      marginTop: 10,
      fontSize: 16,
    },
  });
  

  export default styles;