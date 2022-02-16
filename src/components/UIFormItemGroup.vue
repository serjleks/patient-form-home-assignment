<template>
  <div class="ui-form-item-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UIFormItemGroup",
};
</script>

<style scoped lang="scss">
.ui-form-item-group {
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: $space-small;
  }
}
</style>
