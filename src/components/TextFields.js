import { StyleSheet, TextInput, Platform, Keyboard } from "react-native";

const TextField = ({ placeholder, value, onChangeText, secureTextEntry }) => (
  <TextInput
    style={styles.textfield}
    placeholder={placeholder}
    placeholderTextColor="#E7E7E7"
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
    returnKeyType="done"
    onSubmitEditing={Keyboard.dismiss}
    //fontsize?
  />
);

const styles = StyleSheet.create({
  textfield: {
    width: "100%",
    height: 40,
    borderColor: "#545454",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 9.63,
    fontSize: 18,
    color: "#1C1C1E",
    opacity: 0.8,
    backgroundColor: "#545454",
  },
});

export { TextField };
