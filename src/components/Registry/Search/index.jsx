import React from "react";
import { FormStyled } from "./style";

const Search = ({ sort, sortRegistry, searchRegistry }) => {
  return (
    <FormStyled>
   
      <button onClick={searchRegistry}>
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.90336 0.208984C4.21076 0.208984 0.397659 4.02209 0.397659 8.71469C0.397659 13.4073 4.21076 17.2204 8.90336 17.2204C10.7601 17.2204 12.4761 16.6223 13.8754 15.6099L20.458 22.1768L21.8652 20.7696L15.3608 14.2496C16.639 12.7604 17.4091 10.8274 17.4091 8.71469C17.4091 4.02209 13.596 0.208984 8.90336 0.208984ZM8.90336 1.20966C13.0546 1.20966 16.4084 4.56347 16.4084 8.71469C16.4084 12.8659 13.0546 16.2197 8.90336 16.2197C4.75214 16.2197 1.39833 12.8659 1.39833 8.71469C1.39833 4.56347 4.75214 1.20966 8.90336 1.20966Z"
            fill="#A5A5A5"
          />
        </svg>
      </button>
    </FormStyled>
  );
};

export default Search;
