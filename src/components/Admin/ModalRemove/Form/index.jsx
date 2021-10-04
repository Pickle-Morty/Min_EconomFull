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
      <Label>{content.select.title}</Label>
        <Field name="select" options={typeSelect.map(item => {
          return {value:item.id, label: item.title}
        })} component={SelectForm} />
      </div>
      <Row column>
        <Button
          color="white"
          margin="0 0 10px"
          bg={STYLES.red}
          padding="9px 53px"
        >
          Клик
        </Button>
        
      </Row>
    </form>
  );
};

const ReduxForm = reduxForm({
  form: "organ",
})(Form);

export default ReduxForm;
