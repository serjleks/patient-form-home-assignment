<template>
  <div class="clinic-account">
    <div class="clinic-account-photo" />
    <div class="clinic-account-info">
      <div class="clinic-account-info__name">Клиника №1</div>
      <div class="clinic-account-info__address">ул. Гагарина, 15</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClinicAccount",
};
</script>

<style scoped lang="scss">
.clinic-account {
  display: flex;
  align-items: center;

  min-height: 48px;

  margin-bottom: $space-small;

  > * {
    margin-right: 12px;
  }

  @media (max-height: 480px) {
    display: none;
  }
}

.clinic-account-info {
  &__name {
    font-weight: 500;
    color: $text-color-2;
  }

  &__address {
    font-size: $font-size-2;
  }

  @media (max-width: $breakpoint-1) {
    display: none;
  }
}

.clinic-account-photo {
  vertical-align: middle;

  width: auto;

  min-width: 44px;
  min-height: 44px;

  border-radius: 50%;

  background-image: url("../assets/imgs/clinic-photo.png");
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
