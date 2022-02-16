<template>
  <form
    action=""
    method="get"
    id="patient-form"
    class="patient-form"
    @submit.prevent="submitForm"
  >
    <div class="form-layout">
      <div class="form-layout-grid">
        <div class="form-layout-column">
          <div class="form-layout-row">
            <fieldset>
              <PatientFormCommon></PatientFormCommon>
            </fieldset>
          </div>
          <div class="form-layout-row">
            <fieldset>
              <PatientFormAddress></PatientFormAddress>
            </fieldset>
          </div>
        </div>
        <div class="form-layout-column">
          <div class="form-layout-row">
            <fieldset>
              <PatientFormDocument></PatientFormDocument>
            </fieldset>
          </div>
          <div class="form-layout-row">
            <fieldset>
              <PatientFormOptions></PatientFormOptions>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="form-note">* Поля обязательные к заполнению.</div>
      <div class="form-buttons-layout">
        <div class="form-buttons">
          <UIButton
            primary
            type="submit"
            form="patient-form"
            tabindex="20"
            @click="submitForm"
          >
            <template slot="icon"><div class="cross-icon" /></template>
            Добавить пациента
          </UIButton>
          <div class="form-button-group">
            <UIButton type="reset" tabindex="21" @click="v$.$reset()"
              >Очистить</UIButton
            >
            <UIButton type="button" tabindex="22">Отмена</UIButton>
          </div>
        </div>
        <div class="form-buttons-layout__offset"></div>
      </div>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import UIButton from "@/components/UIButton";

import PatientFormCommon from "@/components/PatientFormCommon";
import PatientFormAddress from "@/components/PatientFormAddress";
import PatientFormDocument from "@/components/PatientFormDocument";
import PatientFormOptions from "@/components/PatientFormOptions";

required.$message = "Необходимо заполнить поле.";

export default {
  name: "PatientForm",
  components: {
    UIButton,
    PatientFormCommon,
    PatientFormAddress,
    PatientFormDocument,
    PatientFormOptions,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  methods: {
    submitSuccessful(event) {
      this.$emit("submitSuccessful", event);
    },
    submitForm() {
      this.v$.$touch();

      if (!this.v$.$invalid) {
        this.submitSuccessful();
      }
    },
  },
};
</script>

<style lang="scss">
.card-title {
  display: flex;
  align-items: center;

  height: 32px;

  :not(:last-child) {
    margin-right: $space-medium;
  }

  &__icon {
    width: 32px;
    height: 32px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: 95% auto;
  }

  &__text {
    color: $text-color;
  }
}

.form-section {
  padding-left: $space-medium;

  > :not(:last-child) {
    padding-bottom: $space-medium-large;
  }
}

.form-item-label {
  min-width: 140px;
  max-width: 140px;

  &_short {
    min-width: 84px;
    max-width: 84px;

    @media (max-width: $breakpoint-3) {
      min-width: 140px;
      max-width: 140px;
    }
  }

  &_text-align-right {
    text-align: right;
    justify-content: flex-end;

    @media (max-width: $breakpoint-3) {
      justify-content: flex-start;
    }
  }
}

.form-item_horizontal {
  display: flex;

  @media (max-width: $breakpoint-3) {
    flex-direction: column;

    > :not(:last-child) {
      margin-bottom: $space-small;
    }
  }
}
</style>

<style scoped lang="scss">
.form-layout {
  display: flex;
  flex-direction: column;
}

.form-layout-grid {
  display: flex;
  width: 100%;

  > :not(:last-child) {
    padding-right: $space-small;
  }

  @media (max-width: $breakpoint-2) {
    display: inline-block;

    > :not(:last-child) {
      padding-right: unset;
    }
  }
}

.form-layout-column {
  display: inline-flex;
  flex-direction: column;

  width: 100%;
  max-width: 600px;

  @media (max-width: $breakpoint-2) {
    max-width: unset;
  }
}

.form-note {
  font-size: $font-size-2;
  padding: 8px;

  color: $text-color-3;
}

.form-layout {
  padding-bottom: $space-medium;
}

.form-buttons-layout {
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: calc(1200px - 4px);

  &__offset {
    min-width: 50%;

    @media (max-width: $breakpoint-2) {
      min-width: 0;
    }
  }
}

.form-buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;

  padding-top: $space-medium;

  > :not(:last-child) {
    margin-right: $space-small;
  }
}

.form-button-group {
  display: flex;

  > :not(:last-child) {
    margin-right: $space-small;
  }
}

.cross-icon {
  width: 16px;
  height: 100%;

  background-image: url("../assets/icons/cross-icon.svg");
  background-position: center;
  background-repeat: no-repeat;
}
</style>
