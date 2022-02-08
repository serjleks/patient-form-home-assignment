<template>
  <div class="hello">
    <h5>{{ msg }}</h5>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
h5 {
  color: #252525;
}
</style>
