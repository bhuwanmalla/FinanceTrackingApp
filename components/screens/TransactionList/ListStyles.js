import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: 'white',
      borderColor: 'red',
      padding: 10,
      borderRadius: 5,
      marginHorizontal: 5,
      marginTop: 10,
      flexDirection: "row",
    },
    list: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  
    itemText: {
      fontSize: 16,
      color: 'black',
    },
  });

  export default styles;