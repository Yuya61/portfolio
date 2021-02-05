import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#fff" : "#010606")};
  white-space: nowrap;
  padding: 10px 25px;
  color: ${({ dark }) => (dark ? "#444" : "#fff")};
  font-size: 13px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s cubic-bezier(0.65, 0, 0.16, 1);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  /* filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.1)); */

  &:hover {
    transition: 1s cubic-bezier(0.65, 0, 0.16, 1);
    background: ${({ primary }) => (primary ? "#444" : "#fff")};
    color: ${({ dark }) => (dark ? "#fff" : "#010606")};
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    /* filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.1)); */
  }
`;
