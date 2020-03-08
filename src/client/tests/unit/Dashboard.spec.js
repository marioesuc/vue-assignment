import { shallowMount } from "@vue/test-utils";
import Dashboard from "@/components/Dashboard.vue";
import Map from "@/components/Map.vue";
import CircularBar from "@/components/CircularBar.vue";
import LargeLabel from "@/components/LargeLabel.vue";

describe("Dashboard.vue", () => {
  it("renders correctly", () => {
    // Stub dynamically loaded components replacing them with their real components
    const stubs = {
      Map,
      CircularBar,
      LargeLabel,
      // Stub LinearChart to fix failing tests because of canvas
      LinearChart: "<span></span>"
    };

    const propsData = {
      data: {
        time: 1511436338000,
        energy: 53.2,
        gps: {
          latitude: 52.093448638916016,
          longitude: 5.117378234863281
        },
        odo: 88526.413,
        speed: 10,
        soc: 72.8
      }
    };

    const wrapper = shallowMount(Dashboard, { propsData, stubs });
    expect(wrapper.find(Map).exists()).toBeTruthy();
    expect(wrapper.find(CircularBar).exists()).toBeTruthy();
    expect(wrapper.find(LargeLabel).exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
