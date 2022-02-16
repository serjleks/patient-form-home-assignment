<template>
  <div class="app-page">
    <div class="app-page-container">
      <div class="app-page__top">
        <Breadcrumb></Breadcrumb>
      </div>
      <div class="app-page__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";

export default {
  name: "AppPageLayout",
  components: {
    Breadcrumb,
  },
};
</script>

<style scoped lang="scss">
.app-page__top {
  padding: 0 $space-medium;

  width: 100%;
}

.app-page-container {
  display: flex;
  flex-direction: column;

  padding: 0 $space-medium;

  width: 100%;
  height: 100%;
}
</style>
