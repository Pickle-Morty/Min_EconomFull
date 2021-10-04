import React from "react";
import { Modal } from "../../../common";
import { Text, Button } from "../../../styledComponents";
import { STYLES } from "../../../constains";
import { ModalFormStyled } from "./style";
import Form from "./Form";

const ModalUserForm = ({ userModal, setUserModal,  select,  sendNewUser }) => {
  const addNewUser = (formData) => {
    setUserModal(false);
    sendNewUser ( formData , "user")
  };
  
  return (
    <ModalFormStyled>
      <Modal
        width="436px"
        height="386px"
        active={userModal}
        setActive={setUserModal}
        radius="20px"
        className="modal"
        padding="35px 23px"
      >
        <Text className="title" color={STYLES.blue} weight="bold" size="23px">
         Добавить администратора
        </Text>
        <Form select={select} onSubmit={addNewUser}  />
        <Button
          border="none"
          padding="0"
          bg="none"
          bgHover="none"
          className="close"
          onClick={() => setUserModal(false)}
          size="20px"
        >
          &#10006;
        </Button>
      </Modal>
    </ModalFormStyled>
  );
};

export default ModalUserForm;
