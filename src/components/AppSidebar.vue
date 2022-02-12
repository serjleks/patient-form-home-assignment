<template>
  <div class="app-sidebar">
    <div class="app-sidebar__offset" />

    <div class="sidebar">
      <div class="sidebar__header">
        <div class="sidebar-container">
          <BrandLogo></BrandLogo>
        </div>
      </div>

      <nav class="sidebar__menu">
        <ul class="nav-menu">
          <li v-for="item in menuItems" :key="item.id" class="menu-item">
            <a
              href="#"
              class="menu-item__button"
              :class="{ 'menu-item__button_active': item.current }"
            >
              <div class="sidebar-container">
                <div class="menu-item__button-layout">
                  <div
                    class="menu-item__icon"
                    :style="{
                      backgroundImage: `url(${require(`../assets/icons/${item.icon}`)})`,
                    }"
                  ></div>
                  <div class="menu-item__content">
                    <p>{{ item.name }}</p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </nav>

      <div class="sidebar__footer">
        <div class="clinic-menu">
          <div class="sidebar-container">
            <ClinicAccount></ClinicAccount>
          </div>
        </div>

        <div class="sidebar-fold">
          <div class="sidebar-container">
            <div class="sidebar-fold__button"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClinicAccount from "@/components/ClinicAccount";
import BrandLogo from "@/components/BrandLogo";

export default {
  name: "AppSidebar",
  components: {
    ClinicAccount,
    BrandLogo,
  },
  data: function () {
    return {
      menuItems: [
        { id: 0, name: "Запись на прием", icon: "nav-icon-1.svg" },
        { id: 1, name: "Финансы", icon: "nav-icon-2.svg" },
        { id: 2, name: "Документы пациента", icon: "nav-icon-3.svg" },
        { id: 3, name: "Пациенты", icon: "nav-icon-4.svg", current: true },
        { id: 4, name: "Кабинет врача", icon: "nav-icon-5.svg" },
        { id: 5, name: "Лаборатории", icon: "nav-icon-6.svg" },
        { id: 6, name: "Отчеты", icon: "nav-icon-7.svg" },
      ],
    };
  },
};
</script>

<style lang="scss">
.app-sidebar__offset {
  min-width: $sidebar-width;
  max-width: $sidebar-width;
  height: 100%;

  @media screen and (max-width: $breakpoint-1) {
    min-width: 60px;
    max-width: 60px;
  }
}
</style>

<style scoped lang="scss">
.sidebar {
  display: flex;
  position: fixed;
  flex-direction: column;

  top: 0;
  left: 0;

  min-width: $sidebar-width;
  max-width: $sidebar-width;
  height: 100%;

  z-index: 3;

  background: $sidebar-bg-color;
  box-shadow: $sidebar-shadow;

  @media screen and (max-width: $breakpoint-1) {
    min-width: 60px;
    max-width: 60px;
  }

  &__menu {
    flex-grow: 1;

    padding-top: $space-small;
    padding-bottom: $space-medium;

    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  &__header {
    display: flex;
    align-items: center;

    min-height: 60px;
    max-height: 60px;
  }

  &__footer {
    display: flex;
    flex-direction: column;
  }
}

.sidebar-container {
  width: 100%;

  padding: 0 $space-small;
}

.menu-item {
  cursor: pointer;
  white-space: nowrap;

  &__button,
  &__button-layout {
    display: flex;
    align-items: center;

    height: 44px;
  }

  &__button-layout {
    padding-left: $space-small;
  }

  &__button {
    &:hover {
      background: $accent-color;
    }
    &:active {
      background: $text-active-color;
    }

    &:hover,
    &:active {
      .menu-item__content > * {
        color: $text-hover-color;
      }
      .menu-item__icon {
        filter: brightness(0) invert(1);
      }
    }

    &_active {
      font-weight: 500;
      background: rgba(#000, 0.06);

      .menu-item__icon {
        filter: saturate(5) brightness(1.4);
      }
    }
  }

  &__icon {
    min-width: 27px;
    min-height: 27px;

    margin-right: $space-medium;

    background-repeat: no-repeat;
    background-position: center;
    background-size: 70% auto;
  }

  @media (max-width: $breakpoint-1) {
    &__content {
      display: none;
    }
  }
}

.sidebar-fold {
  display: flex;
  align-items: center;

  height: 42px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);

  &__button {
    width: 44px;
    height: 27px;

    padding-left: $space-medium;

    cursor: pointer;
    white-space: nowrap;

    background-image: url("../assets/icons/arrow-1.svg");
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: $breakpoint-1) {
      transform: rotate(180deg);
    }

    &:hover {
      filter: brightness(0.7);
    }

    &:active {
      filter: brightness(0.4);
    }
  }
}
</style>
