import { STYLES } from "../../../constains";
import styled from "styled-components";

export const ModalFormStyled = styled.div`
  text-align: center;
  .modal {
    @media screen and (max-width: ${STYLES.breakpoints.sm}) {
      width: 310px;
      height: 310px;
    }
  }
  .modal__title {
    margin-bottom: 10px;
  }
  .field-col {
    text-align: left;
    width: 50%;
    padding: 0 10px;
  }
  .field-row {
    text-align: left;
    width: 100%;
    padding: 0 10px;
  }
  .input-form, .select-form {
    margin: 0 0 20px;
  }
  .close {
    position: absolute;
    right: 15px;
    top: 10px;
  }
`;
