import React from "react";
import { Field, reduxForm } from "redux-form";
import { InputForm, SelectForm } from "../../../../common";
import { Button, Label, Row } from "../../../../styledComponents";
import { STYLES } from "../../../../constains";
import { changeSelect } from "../../../../utils";

const roles = [
  {id:2, title:"Региональный админ"}
]


const FormCreate = ({ handleSubmit, type, content, select }) => {
  const typeSelect = {
    organ: select["organ"], role: roles, region: select["region"]
  } 
  console.log(select)
  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <div className="field-col">
          <Label>Имя</Label>
          <Field name="name" component={InputForm} type={"text"} />

        </div>
        <div className="field-col">
          <Label>Фамилия</Label>
          <Field name="surname" component={InputForm} type={"text"} />

        </div>
      </Row>
      <Row>
        <div className="field-col">
          <Label>Отчество</Label>
          <Field name="patronymic" component={InputForm} type={"text"} />

        </div>
        <div className="field-col">
          <Label>
            Телефонный номер
          </Label>
          <Field name="phoneNumber" component={InputForm} type={"number"} />

        </div>
      </Row>
      <Row>
        <div className="field-col">
          <Label>email</Label>
          <Field name="email" component={InputForm} type={"email"} />
        </div>
        <div className="field-col">

          <Label>Орган</Label>
          <Field name="organId" options={typeSelect.organ.map(item => {
            return { value: item.id, label: item.title }
          })} component={SelectForm} />
        </div>
      </Row>
      <Row>
        <div className="field-col">
          <Label>Роль</Label>
          <Field name="roleId" options={typeSelect.role.map(item => {
            return { value: item.id, label: item.title }
          })} component={SelectForm} />
        </div>
        <div className="field-col">
          <Label>Регион</Label>
          <Field name="regionId" options={typeSelect.region.map(item => {
            return { value: item.id, label: item.title }
          })} component={SelectForm} />
        </div>
      </Row>
      <Row>
        <div className="field-col">
          <Label>username</Label>
          <Field name="username" component={InputForm} type={"text"} />

        </div>
        <div className="field-col">
          <Label>Пароль</Label>
          <Field name="password" component={InputForm} type={"password"} />
        </div>
      </Row>




      <Row column>
        <Button
          color="white"
          margin="0 0 10px"
          bg={STYLES.blue}
          padding="9px 53px"
        >
          Добавить
        </Button>

      </Row>
    </form>
  );
};

const ReduxForm = reduxForm({
  form: "organ",
})(FormCreate);

export default ReduxForm;
