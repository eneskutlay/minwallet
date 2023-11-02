import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        // hide the header bar and hide the bottom tab bar
        headerShown: false,
      }}
    />
  );
}
