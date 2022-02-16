<template>
  <div class="user-menu">
    <ul class="user-menu-items">
      <li v-for="item in list" :key="item.id" class="user-menu-item">
        <div href="#" class="menu-item-button">
          <div
            class="menu-item-button__icon"
            :style="{
              backgroundImage: `url(${require(`../assets/icons/${item.icon}`)})`,
            }"
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserAccountMenu",
  data: function () {
    return {
      list: [
        { id: 0, name: "notifications", icon: "user-notification-icon.svg" },
        { id: 1, name: "call", icon: "user-call-icon.svg" },
        { id: 2, name: "info", icon: "user-info-icon.svg" },
        { id: 3, name: "logout", icon: "user-logout.svg" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.user-menu {
  display: flex;

  &-items {
    display: flex;
    align-items: center;

    *:not(:last-child) {
      margin-right: 6px;
    }
  }
}

.user-menu-item {
  float: left;
}

.menu-item-button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 26px;
  height: 26px;

  cursor: pointer;
  user-select: none;

  &__icon {
    width: 22px;
    height: 22px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: 95% auto;

    filter: brightness(1.35);

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      filter: brightness(0.4);
    }
  }
}
</style>
