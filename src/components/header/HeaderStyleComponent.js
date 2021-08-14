import { NavLink, Link } from "react-router-dom";
import styled, { css } from "styled-components";

const OptionContainerStyle = css`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
`;

export const HeaderComponentStyle = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 4;
`;
export const LogoComponentStyle = styled.div`
  font-size: 4.3rem;
  padding: 0 25px;
  height: 100%;
`;
export const LogoLink = styled(Link)`
  color: #00b8ff;
`;
export const MenuOptionsContainerStyle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const OptionDiv = styled.div`
  ${OptionContainerStyle}
`;
export const OptionNavLink = styled(NavLink)`
  ${OptionContainerStyle}
`;
export const ActiveNavLink = styled(NavLink)`
  color: red;
`;
