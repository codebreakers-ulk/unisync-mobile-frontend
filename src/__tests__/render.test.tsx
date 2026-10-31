/// <reference types="jest" />

import { render } from "@testing-library/react-native";
import { Text, View } from "react-native";

describe("React Native Testing Library setup", () => {
  it("renders native components", async () => {
    const { getByText } = await render(
      <View>
        <Text>Test setup is ready</Text>
      </View>,
    );

    expect(getByText("Test setup is ready")).toBeTruthy();
  });
});
