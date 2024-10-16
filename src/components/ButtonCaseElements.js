import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  max-width: 200px;
  border-radius: 50px;
  border: solid 2px var(--secondary-bg);
  background: var(--primary-bg);
  white-space: nowrap;
  padding: 10px 25px;
  color: var(--primary-txt-color);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s cubic-bezier(0.65, 0, 0.16, 1);

  &:hover {
    transition: 0.2s cubic-bezier(0.65, 0, 0.16, 1);
    background-color: var(--secondary-bg);
    color: var(--primary-bg);
  }

  @media only screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

export const ButtonExternal = styled.a`
  max-width: 200px;
  border-radius: 50px;
  border: solid 2px var(--secondary-bg);
  background: var(--primary-bg);
  white-space: nowrap;
  padding: 10px 25px;
  color: var(--primary-txt-color);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s cubic-bezier(0.65, 0, 0.16, 1);

  &:hover {
    transition: 0.2s cubic-bezier(0.65, 0, 0.16, 1);
    background-color: var(--secondary-bg);
    color: var(--primary-bg);
  }

  @media only screen and (max-width: 960px) {
    font-size: 12px;
  }
`;
