import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.titles}>{children}</Text>;
};

const styles = StyleSheet.create({
  titles: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});

export default Title;
