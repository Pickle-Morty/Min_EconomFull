import React, { useState } from "react";
import { Row, Container, Title } from "../../styledComponents";
import Section from "./Section";
import { Popup } from "../../common";
import ModalForm from "./ModalForm";
import { AdminStyled } from "./style";
import ModalRemove from "./ModalRemove";
import CustomSection from "./CustomSection";
import ModalUserForm from "./ModalUserForm";
import { STYLES } from "../../constains";

const Admin = ({ select, sendNewField, sendRemoveField, sendNewUser }) => {
  const [modal, setModal] = useState(false);
  const [modalR, setModalR] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [type, setType] = useState("organ");
  const sections = [
    {
      title: "Редактировать гос.органы:",
      text: "Налоговая",
      route: "organ",
    },
    {
      title: "Редактировать регионы:",
      text: "Чуйский регион",
      route: "region",
    },
    {
      title: "Редактировать отрасли деятельности:",
      text: "Отрасль деятельности",
      route: "activity",
    },
  ];
  const modalContent = [
    {
      title: " гос.орган",
      select: { type: "organ", title: "Орган" },
    },
    {
      title: " регион",
      select: { type: "region", title: "Регион" },
    },
    {
      title: " отрасль деятельности",
      select: { type: "activity", title: "Отрасль деятельности" }
    },

  ];

  
  return (
    <AdminStyled>
      <Container padding="15px">
        <Row column justify="center">
          {sections.map((item, i) => (
            <Section {...item} key={i}
              setModal={setModal} setType={setType}
              modalR={modalR} setModalR={setModalR} />
          ))}
          <CustomSection setUserModal={setUserModal} />
        </Row>
        <ModalForm
          select={select}
          content={modalContent.filter((item) => item.select.type === type)[0]}
          modal={modal}
          setModal={setModal}
          type={type}
          sendNewField={sendNewField}
        />
        <ModalRemove
          select={select}
          content={modalContent.filter((item) => item.select.type === type)[0]}
          type={type}
          sendRemoveField={sendRemoveField}
          modalR={modalR}
          setModalR={setModalR} />
        <ModalUserForm userModal={userModal} select={select} setUserModal={setUserModal} sendNewUser={sendNewUser} />
        <Popup active={modal} setActive={setModal} />
      </Container>
    </AdminStyled>
  );
};

export default Admin;
