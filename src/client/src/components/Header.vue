<template>
  <div id="header">
    <img id="image" src="../assets/logo.png" />
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
  padding: 5px;
}
#headerText {
  color: #BEBC46;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  width: 200px;
  padding: 5px;
}
</style>
