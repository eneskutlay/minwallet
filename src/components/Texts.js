import { StyleSheet, Text, Platform } from "react-native";

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;
const Subtitle = ({ children }) => (
  <Text style={styles.subtitle}>{children}</Text>
);
const Paragraph = ({ children }) => (
  <Text style={styles.paragraph}>{children}</Text>
);

const Hint = ({ children }) => <Text style={styles.hint}>{children}</Text>;

const styles = StyleSheet.create({
  title: {
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
    fontSize: Platform.OS === "ios" ? 16 : 17,
    marginBottom: 20,
    color: "#E7E7E7",
  },
  hint: {
    overflow: "hidden",
    fontSize: Platform.OS === "ios" ? 14 : 15,
    width: "100%",
    backgroundColor: "#303030",
    color: "#FFFFFF",
    opacity: 0.6,
    padding: 10,
    borderRadius: 9.63,
    marginBottom: 20,
  },
});

export { Title, Subtitle, Paragraph, Hint };
