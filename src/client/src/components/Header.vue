<template>
  <div id="header">
    <img id="image" :src="logoSrc" />
    <div id="separator"></div>
    <span id="headerText">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    logoSrc: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/common/Colors";

#header {
  width: 100%;
  background-color: $header-background;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.75);
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
#image {
  width: 220px;
  padding: 15px;
}
#separator {
  height: 50px;
  width: 1px;
  background-color: $header-separator;
}
#headerText {
  color: $header-text;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
}

@media only screen and (max-width: 800px) {
  #header {
    height: 75px;
  }
  #image {
    width: 180px;
  }
  #separator {
    height: 50px;
  }
  #headerText {
    font-size: 28px;
  }
}
</style>
