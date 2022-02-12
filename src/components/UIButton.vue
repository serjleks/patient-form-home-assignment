<template>
  <button
    type="button"
    class="ui-button ui-button_default"
    v-on="$listeners"
    :class="{ 'ui-button_primary': primary }"
  >
    <div
      class="ui-button__container"
      :class="{ 'ui-button_with-icon': hasContent && hasIcon }"
    >
      <div v-if="hasIcon" class="ui-button__icon">
        <slot name="icon"></slot>
      </div>
      <div class="ui-button__content">
        <slot></slot>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: "UIButton",
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasIcon() {
      return this.$slots.icon?.[0];
    },
    hasContent() {
      return this.$slots.default?.[0];
    },
  },
};
</script>

<style scoped lang="scss">
.ui-button {
  display: inline-block;

  min-height: 32px;

  padding: 4px 12px;
  border-radius: 2px;

  font-size: 14px;
  font-family: inherit;
  text-align: center;

  cursor: pointer;
  user-select: none;

  outline: 0;
  border: 1px solid #d9d9d9;
  color: $ui-button-default-color;
  background: $ui-button-default-bg-color;

  &__container {
    display: flex;
    justify-content: center;
  }

  &_with-icon {
    > :first-child {
      margin-right: 8px;
    }
  }
}

.ui-button_default {
  &:hover,
  &:active {
    color: $ui-button-default-hover-color;
    border-color: $accent-color;
  }

  &:active {
    color: $ui-button-default-active-color;
  }

  &:focus {
    outline: 0;
    border-color: $accent-color;
    box-shadow: 0 0 0 4px rgba($accent-color, 0.1);
  }
}

.ui-button_primary {
  border: none;

  color: $ui-button-primary-color;
  background: $ui-button-primary-bg-color;
  border-color: $accent-color;

  &:hover,
  &:active {
    color: $ui-button-primary-hover-color;
    border-color: rgba($accent-color, 0.8);
    background-color: rgba($ui-button-primary-hover-bg-color, 0.8);
  }

  &:active {
    background-color: $ui-button-primary-active-bg-color;
  }

  &:focus {
    outline: 0;
    border-color: $accent-color;
    box-shadow: 0 0 0 4px rgba($accent-color, 0.4);
    background-color: rgba($ui-button-primary-hover-bg-color, 0.8);
  }
}
</style>
