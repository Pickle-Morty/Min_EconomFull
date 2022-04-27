import React from "react";
import { Popup } from "..";
import { ModalStyled } from "./style";

const Modal = ({
  children,
  active,
  setActive,
  width,
  height,
  radius,
  className,
  padding,
}) => {
  const closeModal = () => {
    setActive(false);
  };
  return (
    <>
      <ModalStyled
        padding={padding}
        active={active}
        className={className}
        width={width}
        height={height}
        radius={radius}
      >
        {children}
      </ModalStyled>
      <Popup active={active} setActive={setActive} />
    </>
  );
};

export default Modal;
