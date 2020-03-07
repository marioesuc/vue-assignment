<template>
  <div id="header">
    <img id="image" src="../assets/logo.png" />
    <div id="separator"></div>
    <span id="headerText">Dashboard</span>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
</style>
