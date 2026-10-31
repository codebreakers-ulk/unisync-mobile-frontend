const { defineConfig, globalIgnores } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const reactNative = require("eslint-plugin-react-native");
const tseslint = require("typescript-eslint");

const tsFiles = ["**/*.{ts,tsx}"];
const reactFiles = ["**/*.{jsx,tsx}"];

function enforceErrors(configs, files) {
  return configs.map((config) => ({
    ...config,
    ...(files ? { files } : {}),
    ...(config.rules
      ? {
          rules: Object.fromEntries(
            Object.entries(config.rules).map(([name, setting]) => {
              const [severity, ...options] = Array.isArray(setting)
                ? setting
                : [setting];

              return [
                name,
                severity === 0 || severity === "off"
                  ? "off"
                  : ["error", ...options],
              ];
            }),
          ),
        }
      : {}),
  }));
}

module.exports = defineConfig([
  globalIgnores([".expo/**", "coverage/**", "dist/**", "node_modules/**"]),
  ...enforceErrors(expoConfig),
  ...enforceErrors(tseslint.configs.strictTypeChecked, tsFiles),
  ...enforceErrors(
    [
      react.configs.flat.recommended,
      react.configs.flat["jsx-runtime"],
    ],
    reactFiles,
  ),
  ...enforceErrors([reactHooks.configs.flat.recommended], reactFiles),
  ...enforceErrors(
    [
      {
        plugins: {
          "react-native": reactNative,
        },
        rules: reactNative.configs.all.rules,
      },
    ],
    reactFiles,
  ),
  {
    files: reactFiles,
    rules: {
      "react-native/no-raw-text": [
        "error",
        {
          skip: ["NativeTabs.Trigger.Label", "TabButton", "ThemedText"],
        },
      ],
    },
  },
  {
    files: tsFiles,
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": "off",
    },
  },
]);
