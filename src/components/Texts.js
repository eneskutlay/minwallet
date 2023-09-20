import { StyleSheet, Text, Platform } from "react-native";

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;
const Subtitle = ({ children }) => (
  <Text style={styles.subtitle}>{children}</Text>
);
const Paragraph = ({ children }) => (
  <Text style={styles.paragraph}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    //if ios use 17px else use 20px

    // if system ios use 17px else use 20px
    fontSize: Platform.OS === "ios" ? 22 : 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#E7E7E7",
  },
  subtitle: {
    fontSize: Platform.OS === "ios" ? 20 : 21,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FDF2C5",
  },
  paragraph: {
    fontSize: Platform.OS === "ios" ? 20 : 21,
    marginBottom: 20,
    color: "#E7E7E7",
  },
});

export { Title, Subtitle, Paragraph };
