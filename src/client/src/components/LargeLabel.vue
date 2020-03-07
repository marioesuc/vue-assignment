<template>
  <div id="largelabel">
    <span id="title">{{`${title}`}}</span>
    <div id="labelValue">
      <span id="currentValue">{{`${currentValue} ${unit}`}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LargeLabel',
  props: {
    title: String,
    currentValue: Number,
    maxValue: Number,
    unit: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#largelabel {
  margin: 50px 20px;
}
#labelValue {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 60px;
  background-color: rgba($color: #7ca363, $alpha: 0.65);
  border-radius: 15px;
}
#title {
  display: flex;
  justify-content: center;
  color: rgba($color: #ADA60F, $alpha: 0.4);
  font-size: 30px;
  font-weight: bold;
  margin: 0 0 12px;
}
#currentValue {
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
   margin: 0 auto;
}
</style>
