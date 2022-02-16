<template>
  <div class="page-nav-menu">
    <div class="previous-page-button">
      <span class="previous-page-button__icon"></span>
      <div class="previous-page-button__text">К списку пациентов</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNavigationMenu",
};
</script>

<style scoped lang="scss">
.page-nav-menu {
  display: flex;
  align-items: center;
}

.previous-page-button {
  display: flex;
  align-items: center;

  height: 42px;

  padding-right: $space-small;

  cursor: pointer;
  user-select: none;

  &__icon {
    margin-right: $space-small;

    min-width: 22px;
    height: 27px;

    background-image: url("../assets/icons/arrow-1.svg");
    background-position: center 4px;
    background-repeat: no-repeat;
  }

  &__text {
    color: $text-color;

    @media (max-width: 650px) {
      display: none;
    }
  }

  &:hover,
  &:active {
    .previous-page-button__icon {
      filter: brightness(0.7);
    }
  }

  &:active {
    .previous-page-button__icon {
      filter: brightness(0.4);
    }
    .previous-page-button__text {
      color: $text-color-2;
    }
  }
}
</style>
