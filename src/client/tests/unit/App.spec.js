import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import Header from "@/components/Header.vue";
import Dashboard from "@/components/Dashboard.vue";

describe("App.vue", () => {
  it("renders correctly", () => {
    // Stub dynamically loaded components replacing them with their real components
    const stubs = {
      Header,
      Dashboard,
      // Stub LinearChart to fix failing tests because of canvas
      LinearChart: "<span></span>"
    };

    const wrapper = shallowMount(App, { stubs });
    expect(wrapper.find(Header).exists()).toBeTruthy();
    expect(wrapper.find(Dashboard).exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
