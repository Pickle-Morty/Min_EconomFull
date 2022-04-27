import React from "react";
import { Field, reduxForm } from "redux-form";
import { InputForm, SelectForm } from "../../../../common";
import { Button, Label, Row } from "../../../../styledComponents";
import { STYLES } from "../../../../constains";
import { changeSelect } from "../../../../utils";

const Form = ({ handleSubmit, type, content, select }) => {
  const typeSelect = select[type];
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <Label className ="modal__title">Название</Label>
        <Field name="field" component={InputForm} />

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
