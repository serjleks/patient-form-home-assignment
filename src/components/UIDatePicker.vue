<template>
  <div class="ui-date-picker">
    <input
      type="date"
      v-bind="$attrs"
      :value="value"
      @input="updateValue($event.target.value)"
      class="ui-date-picker__control"
      :class="{
        'ui-date-picker__control_invalid': v ? v.$error : null,
      }"
    />

    <div
      v-for="error of v.$errors"
      :key="error.$uid"
      class="ui-date-picker__errors"
    >
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
  name: "UIDatePicker",
  inheritAttrs: false,
  props: {
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
.ui-date-picker {
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

.ui-date-picker__control {
  display: inline-block;
  height: 32px;
  width: 100%;

  padding: 4px 11px;

  font-family: inherit;

  color: $text-color;
  background-color: #fff;

  border: 1px solid #dfe4e6;
  border-radius: 2px;

  &[type="date"] {
    background: #fff url("../assets/icons/ui-datepicker-icon.svg") 97% 45%
      no-repeat;

    background-size: 16px;
  }

  &[type="date"]::-webkit-inner-spin-button {
    display: none;
  }

  &[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
  }

  &:focus {
    outline: 0;
    border-color: $accent-color;
    box-shadow: 0 0 0 4px rgba($accent-color, 0.1);
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
}
</style>
