import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      backgroundColor: '#686D76',
      padding: 20,
      alignItems: 'center',
    },
    amount: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    name: {
      fontSize: 20,
      color: '#ffffff'
    },
    location: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#41B06E',
    },
    details: {
      marginVertical: 20,
      paddingHorizontal: 20,
      borderBottomWidth: 0.5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    detailDate: {
      fontSize: 16,
      color: '#000000',
      padding: 10
    },
    detailValue: {
      fontSize: 16,
      padding: 10,
      color: '#FF4C4C'
    },
  });

  export default styles;