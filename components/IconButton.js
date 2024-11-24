import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
export function IconButton({ onPress, iconName, size, color }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <Ionicons name={iconName} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.25,
  },
});
