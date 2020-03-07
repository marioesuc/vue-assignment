<template>
  <div id="header">
    <img id="image" :src="logo" />
    <div id="separator"></div>
    <span id="headerText">{{title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    logoSrc: String,
  },
  data() {
    return {
      logo: require('@/assets/logo.png'),
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  width: 100%;
  background-color: white;
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.75);
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
  background-color: rgb(196, 196, 196);
}
#headerText {
  color: #BEBC46;
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
  padding: 15px;
  }
  #separator {
    height: 50px;
    width: 1px;
    background-color: rgb(196, 196, 196);
  }
  #headerText {
    color: #BEBC46;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
  }
}
</style>
