<template>
  <div class="app-layout">
    <slot name="sidebar" class="app-sidebar"></slot>

    <div class="app-base">
      <slot name="header" class="app-header"></slot>

      <main class="app-main">
        <AppPageLayout>
          <slot name="page"></slot>
        </AppPageLayout>
      </main>

      <slot name="footer" class="app-footer"></slot>
    </div>
  </div>
</template>

<script>
import AppPageLayout from "@/layouts/AppPageLayout";

export default {
  name: "AppLayout",
  components: {
    AppPageLayout,
  },
};
</script>

<style scoped lang="scss">
.app-layout {
  display: flex;
  height: 100vh;
}

.app-base {
  flex: auto;
}
</style>
