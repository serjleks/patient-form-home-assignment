<template>
  <div class="ui-form-item">
    <div class="ui-form-item__label">
      <slot name="label"></slot>
    </div>

    <div class="ui-form-item__control">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "UIFormItem",
};
</script>

<style scoped lang="scss">
.ui-form-item {
  display: flex;
  align-items: flex-start;

  width: 100%;

  &__label {
    padding-top: 6px;
  }

  &__control {
    width: 100%;
  }
}
</style>
