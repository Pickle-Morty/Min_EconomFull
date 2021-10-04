import React from "react";
import { Field, reduxForm } from "redux-form";
import { InputForm, SelectForm } from "../../../../common";
import { Button, Label, Row } from "../../../../styledComponents";
import { STYLES } from "../../../../constains";
import { changeSelect } from "../../../../utils";

const Form = ({ handleSubmit, type, content, select }) => {
  const typeSelect = select["organ"]
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <Label>Login</Label>
        <Field name="login" component={InputForm} />

      </div>
      <div className="field">
        <Label>Password</Label>
        <Field name="password" component={InputForm} type= {"password"} />

      </div>
      <div className="field">
      <Label>Role</Label>
        <Field name="select" options={typeSelect.map(item => {
          return {value:item.id, label: item.title}
        })} component={SelectForm} />
      </div>
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
})(Form);

export default ReduxForm;
