<template>
  <div v-if="textArea">
    <textarea
      type="text"
      v-bind="$attrs"
      :value="value"
      @input="updateValue($event.target.value)"
      class="ui-textarea"
      :class="{
        'ui-textarea_invalid': v ? v.$error : null,
      }"
    />
  </div>
  <div v-else>
    <span class="ui-input__prefix" v-if="prefix">
      {{ prefix }}
    </span>

    <input
      type="text"
      class="ui-input"
      v-bind="$attrs"
      :value="value"
      @input="updateValue($event.target.value, $event)"
      :class="{
        'ui-input_invalid': v ? v.$error : null,
        'ui-input_with-prefix': prefix,
      }"
    />

    <div v-for="error of v.$errors" :key="error.$uid" class="ui-input__errors">
      <ul>
        <li>
          <p>{{ error.$message }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { maskInput } from "@/helpers/maskInput";
export default {
  name: "UIInput",
  inheritAttrs: false,
  props: {
    textArea: Boolean,
    value: String,
    v: Object,
    mask: Boolean,
    maskSlot: String,
    prefix: String,
  },
  methods: {
    updateValue: function (value, event) {
      let formatInputValue = value;
      if (this.mask) {
        formatInputValue = maskInput(
          value,
          event.target,
          event.target.getAttribute("placeholder"),
          this.maskSlot
        );
      }
      this.$emit("input", formatInputValue, event);
    },
  },
};
</script>

<style scoped lang="scss">
.ui-input {
  display: inline-block;
  height: 32px;
  width: 100%;

  padding: 4px 11px;

  font-family: inherit;

  color: $text-color;
  background-color: $ui-input-bg-color;

  border: 1px solid $ui-input-border-color;
  border-radius: 2px;

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

  &__errors {
    padding-top: $space-medium;
    padding-bottom: 0;
    color: $ui-error-color;

    ul li {
      list-style: none;
      padding: 2px 0;
    }
  }

  &_with-prefix {
    padding-left: 38px;
  }

  &__prefix {
    position: absolute;
    padding-top: 8px;
    padding-left: 16px;
    color: #86888a;
    user-select: none;
    pointer-events: none;
  }
}

.ui-textarea {
  display: inline-block;
  width: 100%;
  min-height: 32px;

  padding: 6px 11px;

  font-family: inherit;

  color: $text-color;
  background-color: $ui-input-textarea-bg-color;

  border: 1px solid $ui-input-textarea-border-color;
  border-radius: 2px;

  resize: vertical;

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
