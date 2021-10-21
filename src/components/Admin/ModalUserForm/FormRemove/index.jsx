import React from "react";
import { Field, reduxForm } from "redux-form";
import { InputForm, SelectForm } from "../../../../common";
import { Button, Label, Row } from "../../../../styledComponents";
import { STYLES } from "../../../../constains";
import { changeSelect } from "../../../../utils";

const roles = [
  {id:2, title:"Региональный админ"}
]


const FormRemove = ({ handleSubmit, type, content, select, userList }) => {
  const typeSelect = {
    organ: select["organ"], role: roles, region: select["region"]
  } 
  console.log(select)
  return (
    <form onSubmit={handleSubmit}>
     
      <Row>
        <div className="field-row">
          <Label>Список пользователей</Label>
          <Field name="roleId" options={userList.map(item => {
            return { value: item.id, label: item.username }
          })} component={SelectForm} />
        </div>
      </Row>
      <Row column>
        <Button
          color="white"
          margin="0 0 10px"
          bg={STYLES.blue}
          padding="9px 53px"
        >
          Удалить
        </Button>
      </Row>
    </form>
  );
};

const ReduxForm = reduxForm({
  form: "removeUser",
})(FormRemove);

export default ReduxForm;
