<template>
  <UICard>
    <template v-slot:header>
      <div class="card-title">
        <div
          class="card-title__icon"
          :style="{
            backgroundImage: `url(${require(`../assets/icons/form-options-icon.svg`)})`,
          }"
        ></div>
        <div class="card-title__text">
          <legend>Дополнительно</legend>
        </div>
      </div>
    </template>

    <div class="form-section">
      <UIFormItemGroup>
        <UICheckbox
          id="patient_options_dont_send_sms"
          name="patient_options_dont_send_sms"
          tabindex="19"
          v-model.trim="v$.patient.options.dontSendSms.$model"
          >Не отправлять SMS</UICheckbox
        >
      </UIFormItemGroup>
    </div>
  </UICard>
</template>

<script>
import useVuelidate from "@vuelidate/core";

import UICard from "@/components/UICard";
import UIFormItemGroup from "@/components/UIFormItemGroup";
import UICheckbox from "@/components/UICheckbox";

export default {
  name: "PatientFormOptions",
  components: {
    UICard,
    UICheckbox,
    UIFormItemGroup,
  },
  setup() {
    const v$ = useVuelidate({
      $scope: "patient",
    });

    return { v$ };
  },
  data() {
    return {
      patient: {
        options: {
          dontSendSms: false,
        },
      },
    };
  },
  validations() {
    return {
      patient: {
        options: {
          dontSendSms: "",
        },
      },
    };
  },
};
</script>
