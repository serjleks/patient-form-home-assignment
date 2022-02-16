<template>
  <UICard>
    <template v-slot:header>
      <div class="card-title">
        <div
          class="card-title__icon"
          :style="{
            backgroundImage: `url(${require(`../assets/icons/form-document-icon.svg`)})`,
          }"
        ></div>
        <div class="card-title__text">
          <legend>Документ</legend>
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
                for="patient_doc_type"
                :required="!!v$.patient.document.type.required"
                >Тип документа
              </UIFormItemLabel>
            </template>
            <UISelect
              id="patient_doc_type"
              name="patient_doc_type"
              required
              tabindex="14"
              v-model.trim="v$.patient.document.type.$model"
              :v="v$.patient.document.type"
            >
              <option style="display: none" disabled selected value>
                Выберите документ
              </option>
              <option value="passport">Паспорт</option>
              <option value="birth_certificate">
                Свидетельство о рождении
              </option>
              <option value="driver_license">Водительское удостоверение</option>
            </UISelect>
          </UIFormItem>
        </div>
      </UIFormItemGroup>

      <UIFormItemGroup>
        <div class="form-item_horizontal">
          <UIFormItem>
            <template slot="label">
              <UIFormItemLabel
                class="form-item-label form-item-label_text-align-right"
                for="patient_doc_serial_number"
                :required="!!v$.patient.document.passport.serialNumber.required"
                >Серия</UIFormItemLabel
              >
            </template>
            <UIInput
              type="text"
              placeholder="XX XX"
              maskSlot="X"
              mask
              id="patient_doc_serial_number"
              name="patient_doc_serial_number"
              tabindex="15"
              v-model.trim="v$.patient.document.passport.serialNumber.$model"
              :v="v$.patient.document.passport.serialNumber"
            ></UIInput>
          </UIFormItem>
          <UIFormItem>
            <template slot="label">
              <UIFormItemLabel
                class="form-item-label form-item-label_text-align-right form-item-label_short"
                for="patient_doc_number"
                :required="!!v$.patient.document.passport.number.required"
                >Номер</UIFormItemLabel
              >
            </template>
            <UIInput
              type="text"
              placeholder="YYY YYY"
              maskSlot="Y"
              mask
              id="patient_doc_number"
              name="patient_doc_number"
              tabindex="16"
              v-model.trim="v$.patient.document.passport.number.$model"
              :v="v$.patient.document.passport.number"
            ></UIInput>
          </UIFormItem>
        </div>

        <UIFormItem text-align-right>
          <template slot="label">
            <UIFormItemLabel
              class="form-item-label form-item-label_text-align-right"
              for="patient_doc_issued_by"
              :required="!!v$.patient.document.passport.issued_by.required"
              >Кем выдан</UIFormItemLabel
            >
          </template>
          <UIInput
            text-area
            rows="4"
            id="patient_doc_issued_by"
            name="patient_doc_issued_by"
            maxlength="1024"
            tabindex="17"
            v-model.trim="v$.patient.document.passport.issued_by.$model"
            :v="v$.patient.document.passport.issued_by"
          ></UIInput>
        </UIFormItem>
        <UIFormItem>
          <template slot="label">
            <UIFormItemLabel
              class="form-item-label form-item-label_text-align-right"
              for="patient_doc_date_of_issue"
              :required="!!v$.patient.document.passport.date_of_issue.required"
              >Дата выдачи</UIFormItemLabel
            >
          </template>
          <UIDatePicker
            type="date"
            id="patient_doc_date_of_issue"
            name="patient_doc_date_of_issue"
            required
            tabindex="18"
            v-model.trim="v$.patient.document.passport.date_of_issue.$model"
            :v="v$.patient.document.passport.date_of_issue"
          />
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
  name: "PatientFormDocument",
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
        document: {
          type: "",
          passport: {
            number: "",
            serialNumber: "",
            issued_by: "",
            date_of_issue: "",
          },
        },
      },
    };
  },
  validations() {
    return {
      patient: {
        document: {
          type: { required },
          passport: {
            number: "",
            serialNumber: "",
            issued_by: "",
            date_of_issue: { required },
          },
        },
      },
    };
  },
};
</script>
