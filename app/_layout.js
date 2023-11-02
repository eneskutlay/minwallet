import { Stack } from "expo-router";
import Home from "./home/index";
import App from "./index";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        // hide the header bar and hide the bottom tab bar
        headerShown: false,
      }}
    ></Stack>
  );
}
