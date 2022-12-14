import { StyleSheet, Text, Platform } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.titles}>{children}</Text>;
};

const styles = StyleSheet.create({
  titles: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS ==='android' ? 2 : 0, // cach 1
    // borderWidth: Platform.select({ ios: 0, android: 2 }), // cach 2
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});

export default Title;
