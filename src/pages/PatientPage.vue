<template>
  <div class="patient-page">
    <div class="patient-page__modals" v-if="isModalVisible">
      <div class="app-sidebar__offset" />
      <UIModal v-if="isModalVisible" class="patient-modal-successful">
        <template v-slot:header>
          <p>Пациент был успешно создан</p>
        </template>

        <template v-slot:footer>
          <UIButton primary @click="closeModal">Ok</UIButton>
        </template>
      </UIModal>
    </div>

    <PatientForm @submitSuccessful="submitSuccessful"></PatientForm>
  </div>
</template>

<script>
import UIModal from "@/components/UIModal";
import UIButton from "@/components/UIButton";

import PatientForm from "@/components/PatientForm";

export default {
  name: "PatientCreatePage",
  components: {
    UIButton,
    PatientForm,
    UIModal,
  },
  data() {
    return {
      isSubmitSuccessful: false,
      isModalVisible: false,
    };
  },
  methods: {
    closeModal() {
      this.isModalVisible = false;
    },
    submitSuccessful() {
      this.isModalVisible = true;
      this.isSubmitSuccessful = true;
    },
  },
};
</script>

<style scoped lang="scss">
.patient-page {
  &__modals {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    bottom: 0;
    left: 0;
    right: 0;

    z-index: 1;

    @media (min-width: $breakpoint-2) {
      max-width: calc(1500px - 22px);
      top: 0;
    }
  }
}

.patient-modal-successful {
  min-width: 500px;

  @media (max-width: $breakpoint-2) {
    min-width: unset;
    width: 100%;
    padding: 16px;
  }
}
</style>
