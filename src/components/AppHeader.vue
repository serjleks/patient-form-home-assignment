<template>
  <header class="app-header">
    <div class="app-header__offset"></div>
    <div class="app-header-bar">
      <div class="app-sidebar__offset"></div>
      <div class="app-header-bar-container">
        <PageNavigationMenu></PageNavigationMenu>
        <div class="user-account-menu">
          <UserAccount></UserAccount>
          <UserAccountMenu></UserAccountMenu>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import PageNavigationMenu from "@/components/PageNavigationMenu";
import UserAccount from "@/components/UserAccount";
import UserAccountMenu from "@/components/UserAccountMenu";

export default {
  name: "AppHeader",
  components: {
    PageNavigationMenu,
    UserAccount,
    UserAccountMenu,
  },
};
</script>

<style lang="scss">
.app-header__offset {
  min-height: $header-bar-size;
  max-height: $header-bar-size;
}
</style>

<style scoped lang="scss">
.app-header-bar {
  display: flex;
  position: fixed;
  align-items: center;

  top: 0;
  right: 0;
  left: 0;

  height: $header-bar-size;

  z-index: 2;

  background: $header-bar-bg-color;
  box-shadow: $header-bar-shadow-1;
}

.app-header-bar-container {
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 0 $space-medium;

  > :not(:last-child) {
    margin-right: $space-large;
  }
}

.user-account-menu {
  display: flex;

  > :not(:last-child) {
    margin-right: $space-medium;
  }
}
</style>
