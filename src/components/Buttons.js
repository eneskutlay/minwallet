import { StyleSheet } from "react-native";
import { Button, View } from "react-native";

export default function PrimaryButton() {
  return (
    <View style={styles.container}>
      <Button title="Next" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    height: "auto",
  },
  button: {
    width: "100%",
    alignItems: "center",
    height: "auto",
  },
});

export { PrimaryButton };
