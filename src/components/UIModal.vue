<template>
  <div class="ui-modal">
    <div class="ui-modal-dialog">
      <div class="ui-modal-dialog-header ui-modal-dialog-header__container">
        <slot name="header"></slot>
      </div>

      <div class="ui-modal-dialog-content ui-modal-dialog-content__container">
        <slot></slot>
      </div>

      <div class="ui-modal-dialog-footer ui-modal-dialog-footer__container">
        <slot name="footer"></slot>
      </div>
    </div>

    <div class="ui-modal__overlay"></div>
  </div>
</template>

<script>
export default {
  name: "UIModal",
};
</script>

<style scoped lang="scss">
.ui-modal {
  &__overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    height: 100%;
    width: 100%;

    background: rgba(#000000, 0.2);

    z-index: -1;
  }

  @media (max-width: $breakpoint-2) {
    max-width: unset;
  }
}

.ui-modal-dialog {
  flex-direction: column;

  background: $ui-card-bg-color;
  box-shadow: $ui-card-bar-shadow-1;

  &-header {
    font-size: $font-size-3;

    &__container {
      display: flex;
      align-items: center;

      padding: $space-medium-large;
    }
  }

  &-content {
    display: flex;

    &-container {
      padding: $space-medium;
    }
  }

  &-footer {
    justify-content: flex-end;

    & button {
      min-width: 48px;
    }

    &__container {
      display: flex;
      align-items: center;

      padding: $space-medium;
    }
  }
}
</style>
