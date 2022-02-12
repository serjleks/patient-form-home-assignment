<template>
  <UICard>
    <template v-slot:header>
      <div class="card-title">
        <div
          class="card-title__icon"
          :style="{
            backgroundImage: `url(${require(`../assets/icons/form-info-icon.svg`)})`,
          }"
        ></div>
        <div class="card-title__text">
          <legend>Общая информация</legend>
        </div>
      </div>
    </template>

    <div class="form-section">
      <UIFormItemGroup>
        <UIFormItem>
          <template slot="label">
            <UIFormItemLabel
              class="form-item-label"
              for="patient_surname"
              :required="!!v$.patient.surname.required"
              >Фамилия</UIFormItemLabel
            >
          </template>
          <UIInput
            id="patient_surname"
            name="patient_surname"
            required
            maxlength="512"
            tabindex="1"
            v-model.trim="v$.patient.surname.$model"
            :v="v$.patient.surname"
          ></UIInput>
        </UIFormItem>
        <UIFormItem>
          <template slot="label">
            <UIFormItemLabel
              class="form-item-label"
              for="patient_name"
              :required="!!v$.patient.name.required"
              >Имя</UIFormItemLabel
            >
          </template>
          <UIInput
            id="patient_name"
            name="patient_name"
            required
            maxlength="512"
            tabindex="2"
            v-model.trim="v$.patient.name.$model"
            :v="v$.patient.name"
          ></UIInput>
        </UIFormItem>
        <UIFormItem>
          <template slot="label">
            <UIFormItemLabel
              class="form-item-label"
              for="patient_patronymic"
              :required="!!v$.patient.patronymic.required"
              >Отчество</UIFormItemLabel
            >
          </template>
          <UIInput
            id="patient_patronymic"
            name="patient_patronymic"
            maxlength="512"
            tabindex="3"
            v-model.trim="v$.patient.patronymic.$model"
            :v="v$.patient.patronymic"
          ></UIInput>
        </UIFormItem>
        <UIFormItem>
          <template slot="label">
            <UIFormItemLabel
              class="form-item-label"
              for="patient_gender"
              :required="!!v$.patient.gender.required"
              >Пол</UIFormItemLabel
            >
          </template>
          <UISelect
            id="patient_gender"
            name="patient_gender"
            tabindex="4"
            v-model.trim="v$.patient.gender.$model"
            :v="v$.patient.gender"
          >
            <option style="display: none" disabled selected value>
              Выберите пол пациента
            </option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </UISelect>
        </UIFormItem>
        <UIFormItem>
          <template slot="label">
            <UIFormItemLabel
              class="form-item-label"
              for="patient_birthday"
              :required="!!v$.patient.birthday.required"
              >Дата рождения</UIFormItemLabel
            >
          </template>
          <UIDatePicker
            type="date"
            id="patient_birthday"
            name="patient_birthday"
            required
            tabindex="5"
            v-model.trim="v$.patient.birthday.$model"
            :v="v$.patient.birthday"
          />
        </UIFormItem>
        <UIFormItem>
          <template slot="label">
            <UIFormItemLabel
              class="form-item-label"
              for="patient_phone_number"
              :required="!!v$.patient.phoneNumber.required"
              >Номер телефона</UIFormItemLabel
            >
          </template>
          <UIInput
            type="tel"
            id="patient_phone_number"
            name="patient_phone_number"
            required
            placeholder="(___) ___-____"
            maskSlot="_"
            mask
            prefix="+7"
            tabindex="6"
            v-model.trim="v$.patient.phoneNumber.$model"
            :v="v$.patient.phoneNumber"
          ></UIInput>
        </UIFormItem>
      </UIFormItemGroup>

      <UIFormItemGroup>
        <UIFormItem>
          <template slot="label">
            <UIFormItemLabel
              class="form-item-label"
              for="patient_categories"
              :required="!!v$.patient.categories.required"
              >Группа клиентов</UIFormItemLabel
            >
          </template>
          <UISelect
            id="patient_categories"
            name="patient_categories"
            multiple
            required
            tabindex="7"
            v-model.trim="v$.patient.categories.$model"
            :v="v$.patient.categories"
          >
            <option value="vip">VIP</option>
            <option value="problematic">Проблемные</option>
            <option value="omc">ОМС</option>
          </UISelect>
        </UIFormItem>
        <UIFormItem>
          <template slot="label">
            <UIFormItemLabel
              class="form-item-label"
              for="patient_primary_physician"
              :required="!!v$.patient.primaryPhysician.required"
              >Лечащий врач</UIFormItemLabel
            >
          </template>
          <UISelect
            id="patient_primary_physician"
            name="patient_primary_physician"
            tabindex="8"
            v-model.trim="v$.patient.primaryPhysician.$model"
            :v="v$.patient.primaryPhysician"
          >
            <option style="display: none" disabled selected value>
              Выберите лечащего врача
            </option>
            <option value="1">Иванов</option>
            <option value="2">Захаров</option>
            <option value="3">Чернышева</option>
          </UISelect>
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
import UISelect from "@/components/UISelect";
import UIDatePicker from "@/components/UIDatePicker";

export default {
  name: "PatientFormCommon",
  components: {
    UISelect,
    UICard,
    UIInput,
    UIFormItem,
    UIFormItemLabel,
    UIFormItemGroup,
    UIDatePicker,
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
        surname: "",
        name: "",
        patronymic: "",
        gender: "",
        birthday: "",
        phoneNumber: "",
        categories: "",
        primaryPhysician: "",
      },
    };
  },
  validations() {
    return {
      patient: {
        surname: { required },
        name: { required },
        patronymic: "",
        gender: "",
        birthday: { required },
        phoneNumber: { required },
        categories: { required },
        primaryPhysician: "",
      },
    };
  },
};
</script>
