<template>
  <div class="ui-card">
    <div class="ui-card-header ui-card-header__container">
      <slot name="header"></slot>
    </div>

    <div class="ui-card-content ui-card-content__container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "UICard",
};
</script>

<style scoped lang="scss">
.ui-card {
  display: inline-flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: $space-small;

  background: $ui-card-bg-color;
  box-shadow: $ui-card-bar-shadow-1;
}

.ui-card-header__container {
  display: flex;
  align-items: center;

  padding: $space-medium;
}

.ui-card-content__container {
  padding: 0 $space-medium $space-medium-large;
}
</style>
