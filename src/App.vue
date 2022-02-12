<template>
  <div id="app-mount">
    <AppLayout>
      <template v-slot:sidebar>
        <AppSidebar></AppSidebar>
      </template>

      <template v-slot:header>
        <AppHeader></AppHeader>
      </template>

      <template v-slot:page>
        <PatientPage></PatientPage>
      </template>
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from "@/layouts/AppLayout";
import AppSidebar from "@/components/AppSidebar";
import AppHeader from "@/components/AppHeader";
import PatientPage from "@/pages/PatientPage";

export default {
  name: "App",
  components: {
    AppLayout,
    AppSidebar,
    AppHeader,
    PatientPage,
  },
};
</script>

<style lang="scss">
@import "scss/style";
</style>
