<template>
  <div class="user-account">
    <div class="user-info">
      <div class="user-info__account">
        <div class="user-info__name">Климова М. Е.</div>
        <div class="user-info__status"></div>
      </div>
      <div class="user-info__email">maria.klimova@gmail.com</div>
    </div>
    <div class="user-photo" />
  </div>
</template>

<script>
export default {
  name: "UserAccount",
};
</script>

<style scoped lang="scss">
.user-account {
  display: flex;
  align-items: center;
}

.user-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  margin-right: 12px;

  &__account {
    display: flex;
    align-items: center;
  }

  &__name {
    font-weight: 500;
    color: $text-color-2;
  }

  &__status {
    min-width: 8px;
    min-height: 8px;

    margin: 2px 2px 4px 4px;

    vertical-align: middle;
    border-radius: 50%;

    background-color: $user-account-status-color;
  }

  &__email {
    font-size: $font-size-2;
  }
}

.user-photo {
  vertical-align: middle;

  width: auto;

  min-width: 44px;
  min-height: 44px;

  border-radius: 50%;

  background-image: url("../assets/imgs/user-photo.png");
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
