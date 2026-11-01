import "@/global.css";

import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import { useColorScheme } from "react-native";

import { ThemedText } from "@/components/shared/themed-text";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ThemedText>This is the Exam Hall Finder layout</ThemedText>
    </ThemeProvider>
  );
}
