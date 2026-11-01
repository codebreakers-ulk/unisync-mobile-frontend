import { Platform, StyleSheet, Text, type TextProps } from "react-native";
import { cssInterop } from "nativewind";

import { Fonts, ThemeColor } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export type ThemedTextProps = TextProps & {
  type?:
    | "default"
    | "title"
    | "small"
    | "smallBold"
    | "subtitle"
    | "link"
    | "linkPrimary"
    | "code";
  themeColor?: ThemeColor;
};

const linkPrimaryColor = "#3c87f7";

export function ThemedText({
  style,
  type = "default",
  themeColor,
  ...rest
}: ThemedTextProps) {
  const theme = useTheme();

  let typeStyle: (typeof styles)[NonNullable<ThemedTextProps["type"]>];
  switch (type) {
    case "small":
      typeStyle = styles.small;
      break;
    case "smallBold":
      typeStyle = styles.smallBold;
      break;
    case "title":
      typeStyle = styles.title;
      break;
    case "subtitle":
      typeStyle = styles.subtitle;
      break;
    case "link":
      typeStyle = styles.link;
      break;
    case "linkPrimary":
      typeStyle = styles.linkPrimary;
      break;
    case "code":
      typeStyle = styles.code;
      break;
    default:
      typeStyle = styles.default;
  }

  return (
    <Text
      style={[{ color: theme[themeColor ?? "text"] }, typeStyle, style]}
      {...rest}
    />
  );
}

cssInterop(ThemedText, { className: "style" });

const styles = StyleSheet.create({
  code: {
    fontFamily: Fonts.mono,
    fontSize: 12,
    fontWeight: Platform.select({ android: 700, default: 500 }),
  },
  default: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 24,
  },
  link: {
    fontSize: 14,
    lineHeight: 30,
  },
  linkPrimary: {
    color: linkPrimaryColor,
    fontSize: 14,
    lineHeight: 30,
  },
  small: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 20,
  },
  smallBold: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 20,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: 600,
    lineHeight: 44,
  },
  title: {
    fontSize: 48,
    fontWeight: 600,
    lineHeight: 52,
  },
});
