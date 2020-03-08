import { shallowMount } from "@vue/test-utils";
import LargeLabel from "@/components/LargeLabel.vue";

describe("LargeLabel.vue", () => {
  it("renders correctly", () => {
    const propsData = {
      title: "title",
      currentValue: 15,
      unit: "km/h"
    };

    const wrapper = shallowMount(LargeLabel, { propsData });
    expect(wrapper).toMatchSnapshot();
  });
});
