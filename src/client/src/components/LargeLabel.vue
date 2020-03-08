<template>
  <div id="largelabel">
    <span id="title">{{ `${title}` }}</span>
    <div id="labelValue">
      <span id="currentValue">{{ `${currentValue} ${unit}` }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LargeLabel",
  props: {
    title: String,
    currentValue: Number,
    unit: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/common/Colors";

#largelabel {
  margin: 50px 20px;
}
#labelValue {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 60px;
  background-color: $largelabel-background;
  border-radius: 15px;
}
#title {
  display: flex;
  justify-content: center;
  color: $largelabel-title;
  font-size: 30px;
  font-weight: bold;
  margin: 0 0 12px;
}
#currentValue {
  color: $largelabel-value;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
}
</style>
