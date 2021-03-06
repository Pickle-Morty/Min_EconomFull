import React from "react";
import { Field, reduxForm } from "redux-form";
import { errorScroll } from "../../../utils";
import {
  InputForm,
  TextareaForm,
  SelectForm,
  FileForm,
  CheckboxForm,
  Condition,
} from "../../../common";
import { Button, Label } from "../../../styledComponents";
import {
  validField,
  validFieldMin,
  validFieldMax,
  changeSelect,
} from "../../../utils";
import FormRequest from "../FormStyles";
import { ROLES, CONDITIONS, STYLES } from "../../../constains";
import S3FileUpload from 'react-s3';
 
//Optional Import
import { uploadFile } from 'react-s3';




const config = {
  bucketName: 'min0econom0bucket',
  dirName: 'photos', /* optional */
  region: 'eu-north-1',
  accessKeyId: 'AKIAZEWV3R7NDYLH5WMC',
  secretAccessKey: '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',
}

const onUpload = (e) => {
  console.log(e.target.files[0])
  const file = e.target.files[0]
  uploadFile(file, config)
    .then(data => console.log("все ок",data))
    .catch(err => console.error(err))
}

const minLength = validFieldMin(2);
const maxLengthInput = validFieldMax(30);
const maxLengthTextarea = validFieldMax(1000);

const Form = ({
  routeRole,
  handleSubmit,
  activity,
  region,
  organ,
  cause,
  subject,
  
}, props) => {
  console.log("Props подачи заявок:" )
  return (
    <FormRequest onSubmit={handleSubmit}>
      <Label>Заявитель:</Label>
      <Field
        options={ROLES}
        component={SelectForm}
        name="applicantType"
        onChange={routeRole}
        defaultValue={ROLES[1]}
      />
      <Label>Контакный телефон:</Label>
      <Field
        component={InputForm}
        name="telephone"
        type="tel"
        validate={[validField, maxLengthInput, minLength]}
        placeholder="Введите контактный телефон"
      />
      <Label>Электронная почта:</Label>
      <Field
        component={InputForm}
        name="email"
        validate={[validField, maxLengthInput, minLength]}
        placeholder="Введите электронную почту"
        type="email"
      />
      <Label>ИНН:</Label>
      <Field
        component={InputForm}
        name="inn"
        validate={[validField, maxLengthInput, minLength]}
        placeholder="Введите ИНН"
      />
      <Label>Тип субъекта предпринимательста:</Label>
      <Field
        name="subjectTypeId"
        component={SelectForm}
        options={changeSelect(subject)}
        placeholder="Выберите тип субъекта"
        validate={[validField]}
      />
      <Label>Отрасль и вид экономической деятельности:</Label>
      <Field
        name="economicActivityId"
        component={SelectForm}
        options={changeSelect(activity)}
        validate={[validField]}
        placeholder="Выберите вид экономической деятельности"
      />
      <Label>Оргнан к которому адресована заявка:</Label>
      <Field
        name="organId"
        component={SelectForm}
        options={changeSelect(organ)}
        validate={[validField]}
        placeholder="Выберите орган"
      />
      <Label>Регион осуществления предпринимательской деятельности:</Label>
      <Field
        name="regionId"
        component={SelectForm}
        options={changeSelect(region)}
        validate={[validField]}
        placeholder="Выберите регион"
      />
      <Label>Причина неблагоприятного фактора:</Label>
      <Field
        name="causeOfFactor"
        component={SelectForm}
        options={changeSelect(cause)}
        validate={[validField]}
        placeholder="Выберите тип неблагоприятного фактора"
      />
      <Label>Описание неблагоприятного фактора:</Label>
      <Field
        component={TextareaForm}
        name="problemOfDescription"
        validate={[validField, maxLengthTextarea, minLength]}
      />
      <Label>
        Каким образом и в какой период времени зафиксирован неблагоприятный
        фактор:
      </Label>
      <Field component={TextareaForm} name="descriptionDate" />
      <Label>Как и кем по вашему должна решится ваша проблема? </Label>
      <Field component={TextareaForm} name="clarification" />
      <Field component={FileForm} type="file" name="file" />
      <Condition  data={CONDITIONS} />
      <div className="request-form--checkbox">
        <Field
          component={CheckboxForm}
          name="agreement"
          label="Принять соглашение"
        />
      </div>
      <Button bg={STYLES.blue} margin="0 auto" color="white">
        Подать жалобу
      </Button>
    </FormRequest>
  );
};

const EntityForm = reduxForm({
  form: "entity",
  onSubmitFail: errorScroll,
})(Form);

export default EntityForm;
