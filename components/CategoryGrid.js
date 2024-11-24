import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export function CategoryGrid({ children, title, color, onPress, tileheight }) {
      return (
    <View style={[styles.gridItem, { height: tileheight }]}>
      <Pressable
        android_ripple={{ color: "#cccc" }}
        style={({ pressed }) => [
          styles?.button,
          pressed ? styles?.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles?.innerContainer, { backgroundColor: color }]}>
          {children}
        </View>
      </Pressable>  
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    elevation: 4,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 1 }, // How far the shadow is offset
    shadowColor: "black", // Color of the shadow
    shadowOffset: { width: 0, height: 2 }, // How far the shadow is offset
    shadowOpacity: 0.25, // Transparency of the shadow
    shadowRadius: 8,
    borderRadius: 8,
    overflow: Platform.select({ ios: "", android: "hidden" }),
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  //scope : you can add your own icon or make a text component
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
