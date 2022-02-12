<template>
  <div class="ui-checkbox">
    <input
      type="checkbox"
      id="ui-checkbox-id"
      class="ui-checkbox__input"
      v-bind="$attrs"
      :checked="value"
    />
    <label for="ui-checkbox-id">
      <div class="ui-checkbox__content">
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: "UICheckbox",
  inheritAttrs: false,
  props: {
    value: Boolean,
  },
};
</script>

<style scoped lang="scss">
.ui-checkbox {
  display: flex;
  align-items: center;

  min-height: 32px;

  outline: none;
}

.ui-checkbox__input {
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;

    padding: 4px 8px;
  }

  & + label::before {
    flex-shrink: 0;
    flex-grow: 0;

    width: 16px;
    height: 16px;

    margin-right: 0.5em;

    content: "";
    display: inline-block;

    border: 1px solid $ui-checkbox-border-color;
    border-radius: 2px;

    transition: all 0.2s;

    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  &:checked + label::before {
    border-color: $accent-color;
    background-color: $accent-color;
    background-image: url("../assets/icons/ui-check-icon.svg");

    background-repeat: no-repeat;
    background-position: center;
    background-size: 70% auto;
  }

  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: rgba($accent-color, 0.7);
  }

  &:not(:disabled):active + label::before {
    background-color: rgba($accent-color, 0.8);
    border-color: $ui-checkbox-active-border-color;
  }

  &:focus + label::before {
    box-shadow: 0 0 0 4px rgba($accent-color, 0.25);
  }

  &:focus:not(:checked) + label::before {
    border-color: rgba($accent-color, 0.7);
  }

  &:disabled + label::before {
    background-color: $ui-checkbox-disabled-bg-color;
  }
}
</style>
