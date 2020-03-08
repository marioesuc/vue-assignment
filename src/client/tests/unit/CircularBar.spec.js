import { shallowMount } from "@vue/test-utils";
import CircularBar from "@/components/CircularBar.vue";
import { VueSvgGauge } from "vue-svg-gauge";

describe("CircularBar.vue", () => {
  it("renders correctly", () => {
    const propsData = {
      title: "title",
      currentValue: 15,
      maxValue: 100,
      unit: "km/h"
    };

    const wrapper = shallowMount(CircularBar, { propsData });
    expect(wrapper.find(VueSvgGauge).exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
