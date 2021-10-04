import React from "react";
import { PopupStyled } from "./style";

const Popup = ({ active, setActive }) => {
  
  return (
    <PopupStyled
      onClick={() => setActive(false)}
      active={active}
    ></PopupStyled>
  );
};

export default Popup;
