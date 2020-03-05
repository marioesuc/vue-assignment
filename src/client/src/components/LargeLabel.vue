<template>
  <div id="largelabel">
    <span id="currentValue">{{`${currentValue} ${unit}`}}</span>
  </div>
</template>

<script>
export default {
  name: 'LargeLabel',
  props: {
    currentValue: Number,
    maxValue: Number,
    unit: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#largelabel {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 20px;
  width: 230px;
  height: 60px;
  background-color: rgba($color: #A8A60F, $alpha: 0.6);
  border-radius: 15px;
}
#currentValue {
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
   margin: 0 auto;
}
</style>
