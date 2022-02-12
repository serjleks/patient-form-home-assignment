<template>
  <UICard>
    <template v-slot:header>
      <div class="card-title">
        <div
          class="card-title__icon"
          :style="{
            backgroundImage: `url(${require(`../assets/icons/form-address-icon.svg`)})`,
          }"
        ></div>
        <div class="card-title__text">
          <legend>Адрес</legend>
        </div>
      </div>
    </template>

    <div class="form-section">
      <UIFormItemGroup>
        <div class="form-item_horizontal">
          <UIFormItem>
            <template slot="label">
              <UIFormItemLabel
                class="form-item-label"
                for="patient_address_country"
                :required="!!v$.patient.address.country.required"
                >Страна</UIFormItemLabel
              >
            </template>
            <UIInput
              id="patient_address_country"
              name="patient_address_country"
              tabindex="9"
              maxlength="512"
              v-model.trim="v$.patient.address.country.$model"
              :v="v$.patient.address.country"
            ></UIInput>
          </UIFormItem>
          <UIFormItem>
            <template slot="label">
              <UIFormItemLabel
                class="form-item-label form-item-label_text-align-right form-item-label_short"
                for="patient_address_region"
                :required="!!v$.patient.address.region.required"
                >Область</UIFormItemLabel
              >
            </template>
            <UIInput
              id="patient_address_region"
              name="patient_address_region"
              tabindex="10"
              maxlength="512"
              v-model.trim="v$.patient.address.region.$model"
              :v="v$.patient.address.region"
            ></UIInput>
          </UIFormItem>
        </div>
        <UIFormItem>
          <template slot="label">
            <UIFormItemLabel
              class="form-item-label"
              for="patient_address_city"
              :required="!!v$.patient.address.city.required"
              >Город</UIFormItemLabel
            >
          </template>
          <UIInput
            id="patient_address_city"
            name="patient_address_city"
            required
            tabindex="11"
            maxlength="512"
            v-model.trim="v$.patient.address.city.$model"
            :v="v$.patient.address.city"
          ></UIInput>
        </UIFormItem>
        <UIFormItem>
          <template slot="label">
            <UIFormItemLabel
              class="form-item-label"
              for="patient_address_street_house"
              :required="!!v$.patient.address.streetAndHouse.required"
              >Улица, Дом</UIFormItemLabel
            >
          </template>
          <UIInput
            textArea
            id="patient_address_street_house"
            name="patient_address_street_house"
            tabindex="12"
            maxlength="1024"
            v-model.trim="v$.patient.address.streetAndHouse.$model"
            :v="v$.patient.address.streetAndHouse"
          ></UIInput>
        </UIFormItem>

        <UIFormItem>
          <template slot="label">
            <UIFormItemLabel
              class="form-item-label"
              for="patient_address_house_index"
              :required="!!v$.patient.address.index.required"
              >Индекс</UIFormItemLabel
            >
          </template>
          <div class="form-item__address-index-field">
            <UIInput
              type="text"
              placeholder="XXXXXX"
              maskSlot="X"
              mask
              id="patient_address_house_index"
              name="patient_address_house_index"
              tabindex="13"
              v-model.trim="v$.patient.address.index.$model"
              :v="v$.patient.address.index"
            />
            <UIButton>
              <template slot="icon">
                <div class="find-icon" />
              </template>
            </UIButton>
          </div>
        </UIFormItem>
      </UIFormItemGroup>
    </div>
  </UICard>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import UICard from "@/components/UICard";
import UIInput from "@/components/UIInput";
import UIFormItem from "@/components/UIFormItem";
import UIFormItemLabel from "@/components/UIFormItemLabel";
import UIFormItemGroup from "@/components/UIFormItemGroup";
import UIButton from "@/components/UIButton";

export default {
  name: "PatientFormAddress",
  components: {
    UICard,
    UIInput,
    UIButton,
    UIFormItem,
    UIFormItemLabel,
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
        address: {
          country: "",
          region: "",
          city: "",
          streetAndHouse: "",
          index: "",
        },
      },
    };
  },
  validations() {
    return {
      patient: {
        address: {
          country: "",
          region: "",
          city: { required },
          streetAndHouse: "",
          index: "",
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
.find-icon {
  min-width: 16px;
  min-height: 16px;

  background-image: url("../assets/icons/find-icon.svg");
  background-position: center;
  background-repeat: no-repeat;
}

.form-item__address-index-field {
  display: inline-flex;

  max-width: 124px;

  > :not(:last-child) {
    margin-right: 8px;
    width: 100%;
  }
}
</style>
