import { shallowMount } from "@vue/test-utils";
import Map from "@/components/Map.vue";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

describe("Map.vue", () => {
  it("renders correctly", () => {
    const propsData = {
      latitude: 52.093448638916016,
      longitude: 5.117378234863281
    };

    const wrapper = shallowMount(Map, { propsData });
    expect(wrapper.find(LMap).exists()).toBeTruthy();
    expect(wrapper.find(LTileLayer).exists()).toBeTruthy();
    expect(wrapper.find(LMarker).exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
