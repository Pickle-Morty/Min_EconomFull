import React from "react";
import { Modal } from "../../../common";
import { Text, Button } from "../../../styledComponents";
import { STYLES } from "../../../constains";
import { ModalFormStyled } from "./style";
import FormCreate from "./FormCreate";
import FormRemove from "./FormRemove";

const ModalUserForm = ({ userModal, setUserModal, select, sendNewUser, userList, deleteUser }) => {
  const addNewUser = (formData) => {
    setUserModal(false);
    sendNewUser(formData, "user")
  };


  let modalActive = false
  let modalSize ={
    width:"600px",
    height:"600px"
  }
  if (userModal.create || userModal.remove) {
    modalActive = true
  }
  if ( userModal.remove) {
    modalSize.height = "300px"
    modalSize.width = " 400px"
  }

  const onDeleteUser = (data) => {
    console.log("userData:",data)
    deleteUser(data.roleId)
  }



  const formType = {
    create: () => {
      return (
        <div className="">
          <Text className="title" color={STYLES.blue} weight="bold" size="23px">
            Добавить администратора
          </Text>
          <FormCreate select={select} onSubmit={addNewUser} />
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
        </div>
      )
    },
    remove: () => {
      return (
        <div className="">
          <Text className="title" color={STYLES.blue} weight="bold" size="23px">
            Удалить администратора
          </Text>
          
          <FormRemove userList = {userList} select={select} onSubmit={onDeleteUser} />
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
        </div>
      )
    },
  }

  return (
    <ModalFormStyled>
      <Modal
        width= {modalSize.width}
        height= {modalSize.height}
        active={modalActive}
        setActive={setUserModal}
        radius="20px"
        className="modal"
        padding="35px 23px"
      >
        {
          userModal.create ? formType.create() : formType.remove()
        }

      </Modal>
    </ModalFormStyled>
  );
};

export default ModalUserForm;
