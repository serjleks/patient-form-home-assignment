<template>
  <a href="#" class="brand-logo">
    <div class="brand-logo__icon"></div>
    <div class="brand-logo__text"></div>
  </a>
</template>

<script>
export default {
  name: "BrandLogo",
};
</script>

<style scoped lang="scss">
.brand-logo {
  display: flex;
  align-items: center;

  height: 40px;
  width: max-content;

  padding-right: $space-medium;
  padding-left: $space-small;

  &__icon {
    margin-right: $space-medium;

    width: 27px;
    height: 20px;

    background-image: url("../assets/icons/brand-logo.svg");
    background-size: 27px auto;
    background-position: center 2px;
    background-repeat: no-repeat;

    @media (max-width: $breakpoint-1) {
      margin-right: $space-small;
    }
  }

  &__text {
    width: 77px;
    height: 20px;

    background-image: url("../assets/icons/brand-text.svg");
    background-size: contain;
    background-position: center 4px;
    background-repeat: no-repeat;
  }

  @media (max-width: $breakpoint-1) {
    padding-right: 0;
  }

  @media (max-width: $breakpoint-1) {
    &__text {
      display: none;
    }
  }
}
</style>
