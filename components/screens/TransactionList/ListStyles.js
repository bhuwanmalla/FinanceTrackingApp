import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemTextName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000'
  },

  itemTextAmount: {
    fontSize: 16,
    color: '#FF4C4C',
  },
});

export default styles;