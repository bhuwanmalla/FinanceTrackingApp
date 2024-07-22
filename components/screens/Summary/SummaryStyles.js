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
    highExpenseLabel: {
      fontSize: 16,
      marginTop: 10,
      fontWeight: 'bold',
      color: '#FF4C4C',
    },
    lowExpenseLabel: {
      fontSize: 16,
      marginTop: 10,
      fontWeight: 'bold',
      color: '#41B06E',
    },
    value: {
      marginTop: 10,
      fontSize: 16,
    },
  });
  

  export default styles;