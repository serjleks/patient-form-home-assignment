<template>
  <div class="breadcrumb">
    <p>
      <span style="color: #8c91a6">Пациенты</span>
      <span class="item__separator">/</span>
      <span style="font-weight: 500">Добавить пациента</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
};
</script>

<style scoped lang="scss">
.breadcrumb {
  display: flex;
  align-items: center;
  height: 48px;
}

.item__separator {
  margin: 0 $space-small;
}
</style>
