<template>
  <div>
    <select
      v-bind="$attrs"
      :multiple="multiple"
      @input="updateValue($event.target.value)"
      class="ui-select"
      :class="{
        'ui-select_multiple': multiple,
        'ui-select_invalid': v ? v.$error : null,
      }"
    >
      <slot></slot>
    </select>

    <div v-for="error of v.$errors" :key="error.$uid" class="ui-select__errors">
      <ul>
        <li>
          <p>{{ error.$message }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "UISelect",
  inheritAttrs: false,
  props: {
    multiple: Boolean,
    value: String,
    v: Object,
  },
  methods: {
    updateValue: function (value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped lang="scss">
.ui-select {
  display: inline-block;
  min-height: 32px;
  width: 100%;

  padding: 4px 11px;

  font-family: inherit;

  appearance: none;

  border: 1px solid #dfe4e6;
  border-radius: 2px;

  color: $text-color;
  background: #fff url("../assets/icons/ui-select-icon.svg") no-repeat 96.4% 50%;
  background-size: 12px;

  overflow-y: auto;

  &:focus {
    outline: 0;
    border-color: $accent-color;
    box-shadow: 0 0 0 4px rgba($accent-color, 0.1);
  }

  &:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
  }

  option {
    min-height: 24px;
    display: flex;
    align-items: center;

    padding: 4px;

    &:checked {
      background: $accent-color;
      color: #ffffff;
    }
  }

  &_multiple {
    background: none;
  }

  &_invalid {
    border-color: rgba($ui-error-color, 0.7);
    box-shadow: 0 0 0 2px rgba($ui-error-color, 0.2);

    &:focus {
      outline: 0;
      border-color: $ui-error-color;
      box-shadow: 0 0 0 4px rgba($ui-error-color, 0.2);
    }
  }

  &__errors {
    padding-top: $space-small;
    padding-bottom: 0px;
    color: $ui-error-color;

    ul li {
      list-style: none;
      padding: 2px 0px;
    }
  }
}
</style>
