import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

function CategoryGridTile({ title, color, onPress}) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    // shadow for Android
    elevation: 4,
    // shadow for IOS
    backgroundColor: Platform.select({ ios: "white", android: "none" }),
    shadowColor: Platform.select({ ios: "black", android: "none" }),
    shadowOpacity: Platform.select({ ios: 0.25, android: 0 }),
    shadowOffset: Platform.select({
      ios: { width: 0, height: 2 },
      android: { width: 0, height: 0 },
    }),
    shadowRadius: Platform.select({ ios: 8, android: 0 }),
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: { opacity: 0.5 },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
