import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { G_ADMIN_LINKS, R_ADMIN_LINKS, USER_LINKS } from "../../../constains/links";
import { Row } from "../../../styledComponents";
import { getAuth } from "../../../utils";
import { NavbarStyled } from "./style";

const Navbar = ({ setActive, className }) => {
  const role = getAuth.role()

  const getLinks = (role) => {
    switch (role) {
      case "GLOBAL_ADMIN":  
        return G_ADMIN_LINKS
    
      case 1:  
        return R_ADMIN_LINKS
    
      default:
        return USER_LINKS
    }
  }

  const LINKS = getLinks(role)


return (
  <NavbarStyled className={className}>
    <ul className="list">
      <Row className="row">
        {LINKS.map(({ text, route, icon }, i) => {
          return (
            <li
              key={text}
              onClick={() => setActive(false)}
              className={
                (i === 4 && role <= 0) || (i === 5 && role <= 1)
                  ? "item hide"
                  : "item"
              }
            >
              <NavLink to={route} exact className="link">
                {icon && <span className="icon">{icon()}</span>}
                {text}
              </NavLink>
            </li>
          );
        })}
      </Row>
    </ul>
  </NavbarStyled>
);
};

export default Navbar;
