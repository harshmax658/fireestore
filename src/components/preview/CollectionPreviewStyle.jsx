import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyle = styled(Link)`
  text-decoration: none;

  color: #5f5e5e;
  &:hover {
    // transform: scale(1.1);
    font-size: 2rem;
    opacity: 0.5;
    transition: 0.31s ease-out;
  }
  &:focus {
    color: blue;
  }
`;
