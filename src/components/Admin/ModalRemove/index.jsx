import React from "react";
import { Modal } from "../../../common";
import { Text, Button } from "../../../styledComponents";
import { STYLES } from "../../../constains";
import { ModalRemoveStyled } from "./style";
import Form from "./Form";
import { useSelector } from "react-redux";


const ModalRemove = ({  modalR, setModalR, select, content, type, sendRemoveField }) => {
  const removeField = ({select}) => {
    setModalR(false)
    console.log("1 стадия удаления прошла успешно, formData: ")
    console.log(select)
    sendRemoveField(select ,content.select.type)
  }
  return (
    <ModalRemoveStyled>
      <Modal
        width="436px"
        height="386px"
        active={modalR}
        setActive={setModalR}
        radius="20px"
        className="modal"
        padding="35px 23px"
      >
        <Text className="title" color={STYLES.blue} weight="bold" size="23px">
         {"Удалить" + content.title}
        </Text>
        <Form select={select} onSubmit={removeField} content={content} type={type} />
        <Button
          border="none"
          padding="0"
          bg="none"
          bgHover="none"
          className="close"
          onClick={() => setModalR(false)}
          size="20px"
        >
          &#10006;
        </Button>
      </Modal>
    </ModalRemoveStyled>
  );
};

export default ModalRemove;
