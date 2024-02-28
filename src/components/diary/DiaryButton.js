import { brandColor } from "@lib/palette";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  padding: 1rem;

  font-size: 1rem;
  font-family: "Pretendard";
  font-weight: bold;

  background: ${brandColor};
  outline: none;
  border: none;
  border-radius: 0.4rem;

  color: white;

  user-select: none;
  cursor: pointer;
`;

export default StyledButton;
