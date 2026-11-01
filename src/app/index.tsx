import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/shared/themed-text";
import { ThemedView } from "@/components/shared/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <ThemedText type="title" className="text-center">
            Welcome to&nbsp;UniSync
          </ThemedText>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  heroSection: {
    alignItems: "center",
    flex: 1,
    gap: Spacing.four,
    justifyContent: "center",
    paddingHorizontal: Spacing.four,
  },
  safeArea: {
    alignItems: "center",
    flex: 1,
    gap: Spacing.three,
    maxWidth: MaxContentWidth,
    paddingBottom: BottomTabInset + Spacing.three,
    paddingHorizontal: Spacing.four,
  },
});
