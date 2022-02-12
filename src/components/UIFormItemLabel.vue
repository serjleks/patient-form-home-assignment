<template>
  <div class="ui-form-item-label">
    <label
      v-bind="$attrs"
      class="ui-form-item-label__text"
      :class="{
        'ui-form-item-label-required': required,
      }"
    >
      <slot></slot>
    </label>
    <div v-if="required" class="require-mark">*</div>
    <div v-else class="require-mark__offset"></div>
  </div>
</template>

<script>
export default {
  name: "UIFormItemLabel",
  inheritAttrs: false,
  props: {
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.ui-form-item-label {
  display: flex;

  &-required {
    font-weight: 500;
  }

  &__text {
    text-align: inherit;
  }
}

.require-mark {
  display: inline-block;
  padding-left: 4px;
  padding-right: $space-medium;

  color: $text-require-mark-color;

  &__offset {
    padding-right: $space-medium;
  }
}
</style>
