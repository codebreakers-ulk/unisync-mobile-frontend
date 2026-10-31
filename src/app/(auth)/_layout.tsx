import "@/global.css";

import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";

import { ThemedText } from "@/components/shared/themed-text";

void SplashScreen.preventAutoHideAsync();

export default function AuthLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ThemedText>This is the Auth Layout component</ThemedText>
    </ThemeProvider>
  );
}
