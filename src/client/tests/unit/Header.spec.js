import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(Header, {
      propsData: {
        title: "Dashboard",
        logoSrc: "imageURL"
      }
    });

    expect(wrapper.find("img").exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
